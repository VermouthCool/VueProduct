/*
*
*
对axios的二次分装
*/
import axios from 'axios'
import {Indicator} from 'mint-ui'
const instance = axios.create({
    baseURL:'/api'
});

instance.interceptors.request.use((config)=>{
    Indicator.open('加载中');
    
    return config
})

instance.interceptors.response.use((res)=>{
    Indicator.close()
    return res.data
},(err)=>{
    Indicator.close()
    console.log(err.message);
    return new Promise(()=>{})
})
export default instance