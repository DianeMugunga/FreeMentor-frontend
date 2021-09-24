import React,{useState} from "react";
import { Form, Input, Button, Checkbox, Modal,notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link, useHistory} from "react-router-dom";
import AuthApi from "../services/Auth";
import SignUp from "./pages/SignUp";


const SigninForm = () => {
 
 const history= useHistory();

    const onFinish = async(values) => {
     
     const response = await  AuthApi.login(values);
     console.log("response:",response)
     if(!response){
       return notification.error({message:"Invalid credentials, Please try again"})
     }
     if (response.data.status===200){
       notification.success({message:response.data.message});
       localStorage.setItem("freeMentor_token",response.data.token);
        history.push("/dashboard")
       return window.location.reload(); 
     }
     else{
       return notification.error({message:response.data.message});
     }
      //console.log('Received values of form: ', values);
    };

    const handleClick = e => {
      console.log('click ', e);
      
    };
  
    return (
      <>
    
      <Modal title="User Login">
      <div style={{padding:"30px"}}>
      <SigninForm/>
      </div>
          </Modal>
     
    
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remembasicer: false }}
        onFinish={onFinish}
        
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" >
            Forgot password
          </a>
        </Form.Item>
  
        <Form.Item>
        
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <>
          
          Or <a href="/SignUp">
          <Button type="primary" className="login-form-button">
          Register now
          </Button>
          </a>
          </>
         </Form.Item>
      </Form>
      </>
    );
  };

  export default SigninForm;