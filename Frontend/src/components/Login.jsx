// import React, { useState } from 'react'
// import {useForm} from 'react-hook-form'
// import {useNavigate,Link} from 'react-router-dom'
// import {Input,Button,Logo} from './index'
// import {useDispatch} from 'react-redux'
// import {login as authLogin} from '../store/authSlice'
// import authService  from '../Apis/auth.api.js'

// function Login() {
//     const {register,handleSubmit}= useForm()
//     const dispatch= useDispatch()
//     const navigate= useNavigate()
//     const [error,setError]= useState("")



//     const login= async (data)=>{
//        try {
//         const userdata=await authService.Login(data)
//         if(userdata){
//             dispatch(authLogin({userdata}))
//             navigate('/dashboard')
//         }
//         else{
//             console.log("Login failed");
            
//         }
//        } catch (error) {
//         setError(error.message)
//         throw error
//        }
//     }
//    return (
//      <div
//     className='flex items-center justify-center w-full'
//     >
//         <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
//         <div className="mb-2 flex justify-center">
//                     <span className="inline-block w-full max-w-[100px]">
//                         <Logo width="100%" />
//                     </span>
//         </div>
//         <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
//         <p className="mt-2 text-center text-base text-black/60">
//                     Don&apos;t have any account?&nbsp;
//                     <Link
//                         to="/"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign Up
//                     </Link>
//         </p>
//         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//         <form onSubmit={handleSubmit(login)} className='mt-8'>
//             <div className="space-y-5">
//                 <Input
//                 label="Username"
//                 type='text'
//                 placeholder='Enter Your Username'
//                 {...register('Username',{
//                     required:true
//                 })}
//                 />

//                 <Input
//                 label="Password"
//                 type='password'
//                 placeholder="Enter your password"
//                 {...register('Password',{
//                     required:true,
//                     minLength:{
//                         value:6,
//                         message:"password must be 6 character long"
//                     }
//                 })}
//                 />
//                 <Button
//                 type='submit'
//                 className='w-full bg-coral-500'
//                 backgroundColor='bg-coral-500'
//                 textColor='text-white'
//                 >
//                     SignIn
//                 </Button>
//             </div>
//         </form>  
//     </div> 
//     </div>   
//   )
// }

// export default Login


import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { Input, Button, Logo } from './index'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import authService from '../Apis/baseApis/auth.api.js'

function Login() {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const login = async (data) => {
        try {
            setError("") // Clear previous errors
            const userdata = await authService.Login(data)
            if (userdata) {
                dispatch(authLogin({ userdata }))
                // Navigate to dashboard after successful login
                navigate('/dashboard', { replace: true })
            } else {
                console.log("Login failed");
                setError("Login failed. Please try again.")
            }
        } catch (error) {
            setError(error.message || "An error occurred during login")
            console.error("Login error:", error)
        }
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup" // Changed from "/" to "/signup" for clarity
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className="space-y-5">
                        <Input
                            label="Username"
                            type='text'
                            placeholder='Enter Your Username'
                            {...register('Username', {
                                required: "Username is required"
                            })}
                        />
                        <Input
                            label="Password"
                            type='password'
                            placeholder="Enter your password"
                            {...register('Password', {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long"
                                }
                            })}
                        />
                        <Button
                            type='submit'
                            className='w-full bg-coral-500'
                            backgroundColor='bg-coral-500'
                            textColor='text-white'
                        >
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login