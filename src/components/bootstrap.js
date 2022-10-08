import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Boostrap Exporting to the app.js
export class Bootstrap extends React.Component{
    render(){
        //XML code for the Nav Bar - this returns the html used to display the nav bar
        return(
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/Read">Read</Nav.Link>
                    <Nav.Link href="/Create">Create</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        )
    }
}