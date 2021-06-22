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
                    <Nav.Link href="#features"><h2 className="links">Features</h2></Nav.Link>
                    <Nav.Link href="#projects"><h2 className="links">Features</h2></Nav.Link>
                    <Nav.Link href="#deets"><h2 className="links">Features</h2></Nav.Link>
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
		
		)
}


