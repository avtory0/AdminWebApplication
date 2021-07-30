import React, {useContext} from 'react';
import { Formik, Form, Field } from "formik";
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';

import "../App.css"

const Axios = require('axios');

function SignUp() {
    const initialValues = {
       login: "",
       email: "",
       password: "",
    };
    
    const {setAuthState} = useContext(AuthContext);

    let history = useHistory();

    const onSubmit = (data) => {
      Axios.post("http://localhost:3001/auth", data).then((response) => {
        if(response.data.error){
          alert(response.data.error);
        } else{
          localStorage.setItem('token', response.data);
          setAuthState(true);
          history.push("/privacy");
        }
        
      });
    };

    const signin = () => {
      history.push("/");
    }
    
    return (
        <div className="wrap_login">
            <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}>
                <Form className="formContainer">
                    <span className="form_title">Sign Up</span>
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
          <div className="form_description">
        <span>Already have an account? </span>
        <a  className="form_link" onClick ={signin}>Sign In</a>
      </div>
    
        </Form>
      </Formik>
  
          </div>
        )
}
export default SignUp;
