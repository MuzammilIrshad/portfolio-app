import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function NavBar() {


	return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark"id="nav">
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  
                   
                </Nav>
                <Nav>
                    <Nav.Link href="#skills"><a className="links">Skills</a></Nav.Link>
                    <Nav.Link href="#projects"><a className="links">Projects</a></Nav.Link>
                   
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
		
		)
}


