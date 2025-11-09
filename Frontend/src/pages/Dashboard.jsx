import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { login as freshData} from '../store/authSlice.js'
import useRefreshToken from '../hooks/useRefreshToken.js';
import {useNavigate} from 'react-router-dom'



function Dashboard() {
      const userData = useSelector((state) => state.auth.userData);
      const refresh= useRefreshToken()
      const navigate= useNavigate()


      const redirecttoSub=()=>{
        navigate('/subscribers')
      }
      React.useEffect(()=>{
          console.log("this is userDta",userData)
      },[])
  return (
    <>
    <div>Welcome to dashboard
      <button className='text-3xl' onClick={()=>redirecttoSub()}>Subscriber Cheker</button>
      {/* {data.accessToken}
        {data.user.username}
        {console.log("this is userDta",data.user.username)} */}
    </div>
        <button onClick={()=>refresh()}>Refresh me</button>
    {/* <h1 className='text-7xl'>{data.user.fullname}</h1>
    <img src={data.user.avatar} alt="this is my image" /> */}
    </>
    

  )
}

export default Dashboard