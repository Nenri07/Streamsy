// import useRefreshToken from "../hooks/useRefreshToken"
// import { useLocation } from "react-router-dom"
// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// import { refreshData } from "../store/authSlice"
// import { Link,useNavigate } from "react-router-dom"

// function AuthLayout({children,authentication= true}) {

//     const [loading,setLaoding]= useState(true)
//     const navigate= useNavigate()
//     const location= useLocation()
//     const authStatus= useSelector((state)=>state.auth.authStatus)


//     useEffect(()=>{
        
//         console.log("this is authStatus",authStatus);
//         console.log("this is authentication",authentication);
        
        
//         if(authentication && authStatus !== authentication){
//             navigate('/login')

//         }
//         else if(!authentication && authStatus !== authentication){
//             navigate('/')
//         }

//         setLaoding(false)

//     },[authentication,authStatus])

//   return (
//     loading ? <span className="loading loading-bars loading-md"></span>:<>{children}</>
//   )
// }

// export default AuthLayout




import useRefreshToken from "../hooks/useRefreshToken"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { refreshData } from "../store/authSlice"
import { Link, useNavigate } from "react-router-dom"

function AuthLayout({ children, authentication = true }) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const authStatus = useSelector((state) => state.auth.authStatus)

    useEffect(() => {
        console.log("this is authStatus", authStatus);
        console.log("this is authentication", authentication);
        console.log("current location", location.pathname);

        // If route requires authentication but user is not authenticated
        if (authentication && !authStatus) {
            console.log("Redirecting to login - authentication required but not authenticated");
            navigate('/login', { replace: true })
        }
        // If route doesn't require authentication but user is authenticated
        else if (!authentication && authStatus) {
            console.log("Redirecting to dashboard - user is authenticated but on public route");
            navigate('/dashboard', { replace: true })
        }
        // If user is authenticated and trying to access login page, redirect to dashboard
        else if (authStatus && location.pathname === '/login') {
            console.log("Redirecting authenticated user from login to dashboard");
            navigate('/dashboard', { replace: true })
        }

        setLoading(false)
    }, [authentication, authStatus, navigate, location.pathname])

    return (
        loading ? <span className="loading loading-bars loading-md"></span> : <>{children}</>
    )
}

export default AuthLayout