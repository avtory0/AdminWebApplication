import React, {useState}   from 'react'
import { Formik, Form } from "formik";
import "../App.css"

const Axios = require('axios');

export default function SignIn(){

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  

  const signin = () => {
    const data = { login: login, password: password };
    Axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
    });
  };
    
        return (
          <div className="wrap_login">
         
                  <span className="title">Sign In</span>
                  <div className="input_wrap">
                  <input
                  className="input" name="login" placeholder="Login" 
                  onChange ={(event)=>{
                    setLogin(event.target.value);
                  }}/>
                  </div>      
                 
                  <div className="input_wrap">
                  <input type="password" className="input" name="password" placeholder="Password"
                  onChange ={(event)=>{
                    setPassword(event.target.value);
                  }} />
      </div>
        <button className="btn" type="submit" onClick={signin}>Sign In</button>
      
    

        </div>
          

        )
    
}
