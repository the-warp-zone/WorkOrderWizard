import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Routes from '../../Constants/routes'
import './MainNav.css'

var MainNav = () => {
    // Might need to render sign in and sign out separately
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
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to={Routes.CUSTOMERS}>Customers</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={Routes.WORK_ORDERS}>Work Orders</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={Routes.INVOICES}>Invoices</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={Routes.COSTS}>Costs</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={Routes.ARCHIVED}>Archived</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={Routes.JOBS}>Jobs</Link>
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link to={Routes.ACCOUNT}>My Account</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={Routes.SIGN_IN}>Sign In</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={Routes.LANDING}>Log Out</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MainNav
