import axios from 'axios'
import conf from '../../conf/conf.js'
import { useSelector } from 'react-redux'



//this is simple without any auth required apis for
export default axios.create({
    baseURL: conf.baseURL,
})


//this is for auth required routes 
export const axiosPrivate= axios.create({
    baseURL: conf.baseURL,
    headers:{'Content-Type':'application/json'},
    withCredentials:true
})