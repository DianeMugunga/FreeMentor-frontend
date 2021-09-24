import React from "react";
import { Form, Input, InputNumber, Button,notification,Select } from 'antd';
import {useHistory} from 'react-router-dom';
import AuthApi from '../../../src/services/Auth';
//import Select from "rc-select";
const{Option}=Select;


const SignUp=()=>{
  const history= useHistory();

  const onFinish = async(values) => {
   console.log("values",values);
   const response = await  AuthApi.SignUp(values);
   console.log("response:",response)
   if(!response){
     return notification.error({message:"Invalid credentials, Please try again"})
   }
   if (response.data.status===200){
    notification.success({message:"successfully signed up"});
    return history.push("/#");
    
    
   }
   else{
     return notification.error({message:response.data.message});
   }
    //console.log('Received values of form: ', values);
  };
  
  const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range:'${label} must be between ${min} and ${max}',
        },
      };
    //  const onFinish = (values)=> {
          // console.log(values);
           return(
        
  
    
    <div className="ourform" style={{width:"50%",height:"85vh",backgroundColor:"#b8bee9",border:"solid",margin:"3% 0% 10% 30%"}}>
    <h1 style={{textAlign:"center",fontFamily: "Verdana, Geneva, Tahoma, sans-serif",color:"blue"}}>SignUp  FORM</h1>

    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{margin:"10px 40px 10px 0px"}}>
      <Form.Item style={{display:"flex" ,margin:"5% 10% 5% 10%"}}
        name="firstName"
        label="FirstName"
        rules={[
          {
            required: true,
          },
        ]} 
      >
        <Input />
      </Form.Item > 
      <Form.Item style={{display:"flex" ,margin:"5% 10% 0% 10%"}}
        name="lastName"
        label="LastName"
        
      >
        <Input />
      </Form.Item>
      <Form.Item style={{display:"flex" ,margin:"5% 10% 0% 10%"}}
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item style={{display:"flex" ,margin:"5% 10% 0% 10%"}}
        name="age"
        label="Age"
        rules={[

          {
            type: 'number', 
            min: 0,
            max: 99,
          },
        ]}
       
        //style={{display:"flex",margin:"5% 10% 0% 10%"}}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item style={{display:"flex" ,margin:"5% 10% 0% 10%"}}
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      
<Form.Item style={{display:"flex" ,margin:"5% 10% 0% 10%"}}
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input  style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item style={{display:"flex" ,margin:"5% 10% 0% 10%"}}
        name="gender"
        label="Gener"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      
        
      </Form.Item>
      <Form.Item name="description" label="description " style={{display:"flex" ,margin:"5% 10% 0% 10%"}}>
        <Input.TextArea />
      </Form.Item>
      
        <Button type="primary" htmlType="submit" style={{margin:"3% 0% 30% 58%"}}>
          Submit
        </Button>
      
    </Form>
   
    </div>
  );
};


export default SignUp;