import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'

import '../App.css';

import Home from "../pages/Home";
import Features  from "../pages/SignUp";
import Pricing from "../pages/SignIn";

export default function Navebar() {
    return (
        <> 

        <Navbar className="navbar" bg="light" variant="light">
            <Container>
                <Navbar.Brand className="brand" href="/">Home</Navbar.Brand>
                <Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                    <Nav.Link href="/SignIn">Sign In</Nav.Link>
                </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>

        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/SignUp" component={Features} />
                <Route exact path="/SignIn" component={Pricing} />
            </Switch>
        </Router>
        </>
    )
}
