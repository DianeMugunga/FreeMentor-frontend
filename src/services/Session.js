import { message } from "antd";
import axios from "axios";
 const FREEMENTOR_API_SESSION="https://freementorr-api.herokuapp.com";
 const token = localStorage.getItem("freeMentor_token");

 const config ={
headers: {
    'Content-Type': 'application/json',
    'x-auth-token': token
}
 }
 class SessionApi{
    async createSession(data){
        try{
            const res=await axios.post(FREEMENTOR_API_SESSION+ "/freementor/v1/session/request",data,config)
            return res;
        }catch(error){
            console.log(error);
        }
        

    }

 }

 export default new SessionApi;