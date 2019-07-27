import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './LpNav.css'

var LpNav = () => {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="navColors navbar-dark"
            >
                <Navbar.Brand className="navText" href="#">
                    Work Order Wizard
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Login</Nav.Link>
                        <Nav.Link href="#">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default LpNav
