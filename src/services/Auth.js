import { message } from "antd";
import axios from "axios";
 const FREEMENTOR_API_AUTH="https://freementorr-api.herokuapp.com";

 const config ={
Headers: {
    'Content-Type': 'application/json'
}
 }

class AuthApi {
    async login(data){
        try{
            const res=await axios.post(FREEMENTOR_API_AUTH+ "/freementor/v1/user/signin",data,config)
            return res;
        }catch(error){
            console.log(error.response);

            return error.response;
        }
        

    }

    async SignUp(data){
        try{
            const res=await axios.post(FREEMENTOR_API_AUTH+ "/freementor/v1/user/signup",data,config)
            return res;
        }catch(error){
            console.log(error.message);
            return error.response;
        }
        

    } 


}

export default new AuthApi();