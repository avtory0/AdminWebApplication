import React, {useState, useEffect} from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext';
import Axios from "axios";

import '../App.css';

import Signup  from "../pages/SignUp";
import Signin from "../pages/SignIn";
import Privacy from "../pages/Privacy";

export default function Navebar() {
    const [authState, setAuthState] = useState({
        login: "",
        id: 0,
        status: false,
    });
    
    

    useEffect(() => {
        Axios
        .get('http://localhost:3001/auth', {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
        }).then((response) => {
            if(response.data.error) {
                setAuthState(false);    
            } else {
                setAuthState(true);
            }
        });

    },[]);

    const logout = () => {
        localStorage.removeItem("token");
        setAuthState(false);
    }

    return (
        <> 

        <AuthContext.Provider value={{authState, setAuthState}}>
        <Navbar className="navbar" bg="light" variant="light">
            <Container>
                <Navbar.Brand className="brand" href="/">Home</Navbar.Brand>
                <Nav>
                <Navbar.Collapse className="justify-content-end">
                    {/* {authState && (
                    
                    )} */}
                </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
        
        <Router>
            <Switch>
                
                <Route exact path="/" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/privacy" component={Privacy} />
            </Switch>
        </Router>
        </AuthContext.Provider>
        </>
    )
}
