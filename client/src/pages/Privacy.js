import React, {useEffect,useState} from 'react'
import {Container, Table} from 'react-bootstrap';

import "../App.css";

const Axios = require('axios');

export default function Privacy() {
    const [listofUsers, setListofUseres] = useState([]);

    useEffect(() =>{
        Axios.get("http://localhost:3001/auth/privacy").then((response) => {
            setListofUseres(response.data);
        });
    }, []);

    return (
            <>
        <Container>
            <div className="wrap_table">
            <Table className="table"   hover>
                <thead className="table_head">
                  <tr>
                    <th>#</th>
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
                      <td><input type="checkbox"/></td>
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
