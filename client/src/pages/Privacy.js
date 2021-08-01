import React, {useEffect,useState } from 'react'
import {Container, Table} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import "../App.css";

const Axios = require('axios');

export default function Privacy() {
    
    const [listofUsers, setListofUseres] = useState([]);
    const [newlistofUsers, setNewlistofUsers] = useState([]);

    let history = useHistory();

    useEffect(() =>{

        if(!localStorage.getItem("token")) {
            history.push("/");
        }else {
        Axios.get("http://localhost:3001/auth/privacy").then((response) => {
            setListofUseres(response.data);

        });
        //checkAll
        var btnCheck = document.querySelector('.table_btn');
        btnCheck.addEventListener('click', function(e) {
            var checkbox = document.querySelectorAll('.check') 
            
            for (let i=0; i<checkbox.length; i++) {
                if (checkbox[i].checked===true) 
                    checkbox[i].checked=false;
                else checkbox[i].checked=true;
        }
    })
    
    function test() {
        Axios.get('http://localhost:3001/auth/privacy/test/', {
            headers: { accessToken: localStorage.getItem("token") },
        }).then((response) => {
            console.log(response.data);
            if(response.data === "logout") {
                localStorage.removeItem("token");
                history.push("/")
            } 
        })
    }
    test()
    function ids(IDarray) {
        var checked = document.querySelectorAll('input[type="checkbox"]:checked');
        checked.forEach(item => {
            arr.push(+item.value)
        });
        return IDarray;
    }
    
    
    let arr = [];
    const delBtn = document.querySelector('#deleteUser');
    delBtn.addEventListener('click',() => {
        ids(arr)
        test();
        Axios.delete(`http://localhost:3001/auth/privacy/delete/${arr}`, {
            usersId: arr
        }).then((responce) => {
            console.log(responce.data)
            setListofUseres(listofUsers.filter((val) => {
                return val.arr == arr
            }))
        })
        console.log(arr)
    });
    
    const blockBtn = document.querySelector('#blockUser');
    blockBtn.addEventListener('click', (e) => {
        ids(arr);
        test()
        Axios.post(`http://localhost:3001/auth/privacy/block/${arr}`, {
            usersId: arr
        }).then((response) => {
           const updateList = {status: response.data}
           setListofUseres([...listofUsers, updateList]);
        // setListofUseres(response.data);
        })
        console.log(arr);
    });
    
    const unblockUsr = document.querySelector('#unblockUser');
    unblockUsr.addEventListener('click', () => {
        ids(arr);
        Axios.post(`http://localhost:3001/auth/privacy/unblock/${arr}`, {
            usersId: arr
        }).then((response) => {
           
        })
        console.log(arr);
    });
    }
    }, []);

    
    

const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
}



    return (
            <>
        <Container>

            <div className="wrap"> 
                <div className="toolbar">
                    <div className="col-10">
                        <div >
                        <button className="toolbar_btn" id="blockUser" type="button"> Block selected</button>
                        <button className="toolbar_btn" id="unblockUser" type="button"> Unblock selected</button>
                        <button className="toolbar_btn" id="deleteUser" type="button"> Delete selected</button>
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
                    <tr key={key} className="user">
                      <td><input value={value.id}  className="check" type="checkbox"/></td>
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
            {
                
            }
        </>
    )
}
