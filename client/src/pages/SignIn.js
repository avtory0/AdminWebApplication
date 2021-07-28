import React, {useState}   from 'react'
import "../App.css";
import {useHistory} from 'react-router-dom';

const Axios = require('axios');

export default function SignIn(){
  
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  
  let history = useHistory();

  const signin = () => {
    const data = { login: login, password: password };
    Axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if(response.data.error){
        alert(response.data.error);
      } else{
        localStorage.setItem('token', response.data);
        history.push("/privacy");
      }
    });
  };

  const signup = () => {
    history.push("/signup");
  }
    
        return (
          <div className="wrap_login">
         
                  <span className="form_title">Sign In</span>
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
      <div className="form_description">
        <span>No account? </span>
        <a className="form_link" onClick ={signup}>Sign Up</a>
      </div>
    

        </div>
          

        )
    
}
