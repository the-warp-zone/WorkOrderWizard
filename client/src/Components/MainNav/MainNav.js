import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Routes from '../../Constants/routes';
import './MainNav.css';
import { LinkContainer } from 'react-router-bootstrap';
import SignOutButton from '../Auth/SignOut';

const MainNav = props => (
  // Might need to render sign in and sign out separately
  <div>
    <Navbar collapseOnSelect expand="lg" className="navColors navbar-dark">
      <LinkContainer to={Routes.HOME}>
        <Navbar.Brand className="navText">Work Order Wizard</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to={Routes.CUSTOMERS}>
            <Nav.Link>Customers</Nav.Link>
          </LinkContainer>
          <LinkContainer to={Routes.WORK_ORDERS}>
            <Nav.Link>Work Orders</Nav.Link>
          </LinkContainer>
          <LinkContainer to={Routes.INVOICES}>
            <Nav.Link>Invoices</Nav.Link>
          </LinkContainer>
          <LinkContainer to={Routes.COSTS}>
            <Nav.Link>Costs</Nav.Link>
          </LinkContainer>
          {/*
						<LinkContainer to={Routes.ARCHIVED}>
                            <Nav.Link>Archived</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={Routes.JOBS}>
                            <Nav.Link>Jobs</Nav.Link>
                        </LinkContainer>
						*/}
        </Nav>
        <Nav className="ml-auto">
          {/* Note: Only Show My Account While Logged In */}
          <LinkContainer to={Routes.ACCOUNT}>
            <Nav.Link>My Account</Nav.Link>
          </LinkContainer>
          {/* Note: Only Show Sign In While Logged Out */}
          <Nav.Link onClick={props.handleShow}>Sign In</Nav.Link>
          <SignOutButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default MainNav;
