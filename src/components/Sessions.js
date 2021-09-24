import React from 'react';

import {
    Form, Modal,
    Input, Table,
    Button,
    Select,
    DatePicker,
    notification
} from 'antd';
import { useHistory } from "react-router-dom";

import mentors from '../asset/constent/mentors.json';
import SessionApi from '../services/Session';

const { Option } = Select;
const Session = () => {
const history = useHistory();

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}



  const onFinish = async(values) => {
     console.log('Received values of form: ', values);
   const response= await SessionApi.createSession(values);
   console.log("response:", response);
   if(!response){
     return notification.error({message:"Failed to create session"});

   }

   if(response.data.status===200){
    
    notification.success({message:"Session Rwaquested successfully"});
    return history.push("/Dashbaord");
    

   }
   else{
    return notification.error({message:response.data.message})
   }
  //  console.log("response",response);

  };

    return (
        <Form
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            onFinish={onFinish}
        //   onValuesChange={onFormLayoutChange}
        >
            <Form.Item 
        name="Title"
        label="Title"
        rules={[{ required: true, message: 'Please input your the title!' }]}>
                <Input />
            </Form.Item>
            <Form.Item 
            name="Description"
            label="Description"
            rules={[{ required: true, message: 'Please enter the description!' }]}>
                <Input />
            </Form.Item>
            <Form.Item 
            name="mentor"
            label="Select Mentor">

                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        mentors.map((mentor) => (
                            <Option value={mentor._id}>{mentor.firstName}</Option>
                        ))
                    }


                </Select>
            </Form.Item>
            <Form.Item 
             name="Timetostart"
             label="Time to start"
             rules={[{ required: true, message: 'Please enter the Time!' }]}>
            
                <DatePicker />
            </Form.Item>
            <Form.Item
             name="Timetoend"
             label="Time to End"
             rules={[{ required: true, message: 'Please enter the description!' }]}>
            
                <DatePicker />
            </Form.Item>

            
            <Form.Item >
            <Button type="primary" htmlType="submit" className="login-form-button">
          Create
        </Button>
            </Form.Item>
            
        </Form>
    )
}

export default Session;