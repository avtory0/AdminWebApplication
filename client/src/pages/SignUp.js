import React, {useContext} from 'react';
import { Formik, Form, Field, ErrorMessage  } from "formik";
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';
import * as Yup from "yup";

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

    const validationSchema = Yup.object().shape({
      login: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    const onSubmit = (data) => {
      Axios.post("http://localhost:3001/auth", data).then((response) => {
        if(response.data.error){
          alert(response.data.error);
        } else{
          localStorage.setItem('token', response.data);
          setAuthState({
            login: response.data.login,
            id: response.data.id,
            status: true,
          });
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
            validationSchema = {validationSchema}
            onSubmit={onSubmit}>
                <Form className="formContainer">
                    <span className="form_title">Sign Up</span>
                    <div className="input_wrap">
                    <Field
                    className="input" name="login" placeholder="Login"/>
                    </div>      
                    <ErrorMessage className ="error" name="login" component="span" />
                    <div className="input_wrap">
                    <Field className="input" name="email" placeholder="Email"/>
                    </div>
                    <div className="input_wrap">
                    <Field type="password" className="input" name="password" placeholder="Password" />
                    </div>
                    <ErrorMessage className ="error" name="email" component="span" />
                    <ErrorMessage className ="error" name="password" component="span" />
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
