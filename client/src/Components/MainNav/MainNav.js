import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignOutButton from '../LandingPage/Jumbotron/SignOut';
import Routes from '../../Constants/routes';
import './MainNav.css';
import { LinkContainer } from 'react-router-bootstrap';

const MainNav = ({ authUser }) => <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;

const NavigationAuth = () => (
  <ul>
    <li>
      <Nav.Link to={Routes.LANDING}>Landing</Nav.Link>
    </li>
    <li>
      <Nav.Link to={Routes.HOME}>Home</Nav.Link>
    </li>
    <li>
      <Nav.Link to={Routes.ACCOUNT}>Account</Nav.Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Nav.Link to={Routes.LANDING}>Landing</Nav.Link>
    </li>
    <li>
      <Nav.Link to={Routes.SIGN_IN}>Sign In</Nav.Link>
    </li>
  </ul>
);
// Might need to render sign in and sign out separately

// <div>
//   <Navbar collapseOnSelect expand="lg" className="navColors navbar-dark">
//     <Navbar.Brand className="navText" href="#">
//             Work Order Wizard
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//     <Navbar.Collapse id="responsive-navbar-nav">
//       <Nav className="mr-auto">
//         <LinkContainer to={Routes.CUSTOMERS}>
//           <Nav.Link>Customers</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to={Routes.WORK_ORDERS}>
//           <Nav.Link>Work Orders</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to={Routes.INVOICES}>
//           <Nav.Link>Invoices</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to={Routes.COSTS}>
//           <Nav.Link>Costs</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to={Routes.ARCHIVED}>
//           <Nav.Link>Archived</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to={Routes.JOBS}>
//           <Nav.Link>Jobs</Nav.Link>
//         </LinkContainer>
//       </Nav>
//       <Nav className="ml-auto">
//         <LinkContainer to={Routes.ACCOUNT}>
//           <Nav.Link>My Account</Nav.Link>
//         </LinkContainer>
//         <Nav.Link onClick={this.props.handleShow}>Sign In</Nav.Link>
//         <LinkContainer to={Routes.LANDING}>
//           <Nav.Link>Log Out</Nav.Link>
//         </LinkContainer>
//         <SignOutButton />
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// </div>;

export default MainNav;
