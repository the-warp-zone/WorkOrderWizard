import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './MainNav.css'


var MainNav = () => {
  return (
    <div>

<Navbar collapseOnSelect expand="lg" className='navColors navbar-dark'>
  <Navbar.Brand className='navText' href="#">Work Order Wizard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
      <Nav.Link href="#">Customers</Nav.Link>
      <Nav.Link href="#">Work Orders</Nav.Link>
      <Nav.Link href="#">Invoices</Nav.Link>
      <Nav.Link href="#">Costs</Nav.Link>
      <Nav.Link href="#">Archived</Nav.Link>
      <Nav.Link href="#">Jobs</Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="#">My Account</Nav.Link>
      <Nav.Link href="#">Log Out</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default MainNav;