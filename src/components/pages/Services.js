import React from "react";
import Mentors from "../mentors";
import { Result, Button } from 'antd';
import { Link } from "react-router-dom";

const services = () => {

  return (
    <>
      <Result
        status="warning"
        title="Sorry!!! this page is under maintanance."
        extra={
          <a href="/">
          <Button type="primary" key="console">
            Go back
          </Button>
          </a>

        }
      />,
      );
    </>
  )
}


export default services;







