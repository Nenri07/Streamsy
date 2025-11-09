import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { axiosPrivate } from '../Apis/baseApis/axios'
import useRefreshToken from './useRefreshToken'


const useaxiosPrivate=()=>{
    const refresh= useRefreshToken()
    const isAuth= useSelector((state)=>state.auth.authStatus)
    const accessTokenfromStore= useSelector((state)=>state.auth.accessToken)
    
    
    

    useEffect(()=>{

        const requestInterceptors= axiosPrivate.interceptors.request.use(
            config=>{
                if(!config.headers['Authorization']){
                    config.headers['Authorization']=` Bearer ${accessTokenfromStore}`
                }
                return config
            },(error)=>Promise.reject(error)
        );

        const responseInterceptors= axiosPrivate.interceptors.response.use(
            response=>response,
            async(error)=>{
                const prevRequest= error?.config
                console.log("this is internal file of Private axios",error.response.status);
                console.log("this is preRequest",prevRequest.sent);
                
                
                if(error?.response?.status==500 && prevRequest?.sent){
                    prevRequest.sent=true
                    const {accessToken}=  await refresh()
                    prevRequest.headers['Authorization']=`Bearer ${accessToken}`
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
        );

        return()=>{
            axiosPrivate.interceptors.response.eject(responseInterceptors)
            axiosPrivate.interceptors.request.eject(requestInterceptors)
        }

    },[isAuth,refresh,accessTokenfromStore])

    return axiosPrivate
}

export default useaxiosPrivate

