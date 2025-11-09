import conf from '../../conf/conf.js';
import axios from './axios.js'
import { axiosPrivate } from './axios.js';
//Urls
const LoginUrl='/user/login'

export class AuthService{
        
async Login({Username,Password}){
    try {
       const response= await axios.post(LoginUrl,JSON.stringify({
            username:Username,
            password:Password
        }),{
            headers:{'Content-Type':'application/json'},
            withCredentials:true
        }
    );
    console.log(JSON.stringify(response?.data));

    return  response.data
    } catch (error) {
        throw error
    }

} 

async getCurrentUser(AbortSignal){
    try {
        const response= await axiosPrivate.get('/user/get-user',{
            signal:AbortSignal
        })
        return JSON(response?.data)
    } catch (error) {
        throw new Error("Error while fetching current user",error);   
    }
}

}
const authService = new AuthService();
export default authService