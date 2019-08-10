import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Routes from '../../Constants/routes'
import './MainNav.css'
import { LinkContainer } from 'react-router-bootstrap'

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
                        <LinkContainer to={Routes.CUSTOMERS}>
                            <Nav.Link>Customers</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={Routes.WORK_ORDERS}>
                            <Nav.Item>Work Orders</Nav.Item>
                        </LinkContainer>
                        <LinkContainer to={Routes.INVOICES}>
                            <Nav.Item>Invoices</Nav.Item>
                        </LinkContainer>
                        <LinkContainer to={Routes.COSTS}>
                            <Nav.Item>Costs</Nav.Item>
                        </LinkContainer>
                        <LinkContainer to={Routes.ARCHIVED}>
                            <Nav.Item>Archived</Nav.Item>
                        </LinkContainer>
                        <LinkContainer to={Routes.JOBS}>
                            <Nav.Item>Jobs</Nav.Item>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ml-auto">
                        <LinkContainer to={Routes.ACCOUNT}>
                            <Nav.Item>My Account</Nav.Item>
                        </LinkContainer>
                        <LinkContainer to={Routes.SIGN_IN}>
                            <Nav.Item>Sign In</Nav.Item>
                        </LinkContainer>
                        <LinkContainer to={Routes.LANDING}>
                            <Nav.Item>Log Out</Nav.Item>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MainNav
