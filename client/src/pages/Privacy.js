import React, {useEffect,useState } from 'react'
import {Container, Table} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import "../App.css";

const Axios = require('axios');

export default function Privacy() {
    
    const [listofUsers, setListofUseres] = useState([]);
    const [authState, setAuthState] = useState(false);
    let history = useHistory();

    useEffect(() =>{
        
        var btnCheck = document.querySelector('.table_btn');
        btnCheck.addEventListener('click', function(e) {
            var checkbox = document.querySelectorAll('.check') 
            
            for (let i=0; i<checkbox.length; i++) {
                if (checkbox[i].checked===true) 
                    checkbox[i].checked=false;
                else checkbox[i].checked=true;
          
        }
    })
        if(!localStorage.getItem("token")) {
            history.push("/");
        }else {
        Axios.get("http://localhost:3001/auth/privacy").then((response) => {
            setListofUseres(response.data);
            
        });
    }
    }, []);

   
//     document.addEventListener('DOMContentLoaded', function() {
    
    
// })

const logout = () => {
    localStorage.removeItem("token");
    setAuthState(false);
    history.push("/");
}

    return (
            <>
        <Container>

            <div className="wrap"> 
                <div className="toolbar">
                    <div className="col-10">
                        <div >
                        <button className="toolbar_btn" type="button"> Block selected</button>
                        <button className="toolbar_btn" type="button"> Unblock selected</button>
                        <button className="toolbar_btn" type="button"> Delete selected</button>
                        </div>
                </div>
                <div className="col-2">
                <button onClick={logout}>LogOut</button>
                </div>
                </div>
            </div>

            <div className="wrap">
            <Table className="table" hover>
                <thead className="table_head">
                  <tr>
                    <th><button className="table_btn" type="button"> sel/unsel all</button></th>
                    <th>Id</th>
                    <th>Login</th>
                    <th>Email</th>
                    <th>Reg Date</th>
                    <th>Last Login</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
      {listofUsers.map((value, key) => {
        return (
                    <tr key={key}>
                      <td><input className="check" type="checkbox"/></td>
                      <td>{value.id}</td>
                      <td>{value.login}</td>
                      <td>{value.email}</td>
                      <td>{value.regDate.slice(0,10)}</td>
                      <td>{value.lastLogin.slice(0,10)}</td>
                      <td>{value.status}</td>
                    </tr>
                );
            })}
                </tbody>
            </Table>
            </div>
    </Container>

        </>
    )
}
