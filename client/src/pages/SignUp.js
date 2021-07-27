import React from 'react';
// import { Button, Form } from 'react-bootstrap'
import { Formik, Form, Field } from "formik";

import "../App.css"

const Axios = require('axios');



function SignUp() {
    const initialValues = {
       login: "",
       email: "",
       password: "",
    };
      
    const onSubmit = (data) => {
      Axios.post("http://localhost:3001/auth", data).then(() => {
        console.log(data);
      });
    };

    
    return (
        <div className="wrap_login">
            <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}>
                <Form className="formContainer">
                    <span className="title">Sign Up</span>
                    <div className="input_wrap">
                    <Field
                    className="input" name="login" placeholder="Login"/>
                    </div>      
                    <div className="input_wrap">
                    <Field className="input" name="email" placeholder="Email"/>
                    </div>
                    <div className="input_wrap">
                    <Field type="password" className="input" name="password" placeholder="Password" />
        </div>
          <button className="btn" type="submit">Sign Up</button>
        </Form>
      </Formik>
  
          </div>
        )
}
export default SignUp;
