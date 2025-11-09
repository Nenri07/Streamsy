import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import authService from "../Apis/baseApis/auth.api";
import { login } from "../store/authSlice";

const useRefreshPage=()=>{
    const [refreshPage,setRefreshPage]= useState(false)
    const [getUser,setGetUser]= useState(null)
    const[accessToken,setAccessToken]= useState(null)
    const dispatch= useDispatch()
    const refresh= useRefreshToken()

    useEffect(()=>{
        let isMounted=true;
        const controller= new AbortController()
        const signal= controller.signal
        const LoadPage= async()=>{
            try {
                if(isMounted){{
                    const accesToken= refresh()
                    console.log("this is access token from useRefreshPage",accesToken);
                    const userData= await authService.getCurrentUser(signal)
                    console.log("this is userData from useRefreshPage",userData);
                    if(!userData ||!accessToken){
                        throw new Error("No user data or access token found")
                    }
                    setGetUser(userData)
                    setAccessToken(accesToken)

                    dispatch(login({getUser,accessToken}))
                    setRefreshPage(prev=>!prev)

                }}
                    
            } catch (error) {
                console.log("error while refreshing token in useRefreshPage",error);
                throw error
            }
        }
        LoadPage()
        return()=>{
            isMounted=false
            controller.abort()
        }
    },[])
    return refreshPage

}
export default useRefreshPage


