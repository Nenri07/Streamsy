// import React from 'react'
// import axios from '../Apis/axios'
// import { useDispatch, useSelector } from 'react-redux'
// import { refreshData } from '../store/authSlice'

// function useRefreshToken() {

//    const dispatch= useDispatch()



//   const refresh= async()=>{
//     const response= await axios.post('/user/refresh-token',{},{
//       withCredentials:true
//     })
//     if(response){
//       const userData= response.data.data
//           // dispatch(login({response}))
//         if(!userData){
//           throw new Error("No access token or user data found")
//         }

//         dispatch(refreshData({userData, accessToken:userData?.accessToken}))
//         console.log("user accessstoken from useRefreshToken",userData?.accessToken);
//         console.log("user data from useRefreshToken",userData.stringifyUserData);
//         console.log("user id from useRefreshToken",userData.stringifyUserData?._id);
        
        
        
//         return userData?.accessToken

//     }
//   }
//   return refresh
// }

// export default useRefreshToken


import React from 'react'
import axios from '../Apis/baseApis/axios'
import { useDispatch } from 'react-redux'
import { refreshData } from '../store/authSlice'

function useRefreshToken() {
  const dispatch = useDispatch()

  const refresh = async () => {
    try {
      const response = await axios.post('/user/refresh-token', {}, {
        withCredentials: true
      })
      
      const userData = response.data.data
      
      if (!userData?.accessToken) {
        throw new Error("Invalid refresh token response")
      }

      dispatch(refreshData({ userData, accessToken: userData.accessToken }))
      return userData.accessToken

    } catch (error) {
      console.error("Refresh failed:", error)
      throw error
    }
  }
  
  return refresh
}

export default useRefreshToken