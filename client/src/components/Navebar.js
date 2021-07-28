import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'

import '../App.css';


import Signup  from "../pages/SignUp";
import Signin from "../pages/SignIn";
import Privacy from "../pages/Privacy";

export default function Navebar() {
    return (
        <> 

        <Navbar className="navbar" bg="light" variant="light">
            <Container>
                <Navbar.Brand className="brand" href="/">Home</Navbar.Brand>
                <Nav>
                <Navbar.Collapse className="justify-content-end">
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
        </>
    )
}
