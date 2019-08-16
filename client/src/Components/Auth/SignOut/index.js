<<<<<<< HEAD
import React from 'react';
import LinkContainer from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Routes from '../../../Constants/routes';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button to={Routes.LANDING}>
    <Nav.Link onClick={firebase.doSignOut}>Sign Out</Nav.Link>
  </button>
);
=======
import React from 'react'
import LinkContainer from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav'
import * as firebase from 'firebase'
import Routes from '../../../Constants/routes'
import { withFirebase } from '../Firebase'
import Button from 'react-bootstrap/Button'

const SignOutButton = ({ firebase }) => (
    <button to={Routes.LANDING}>
        <Nav.Link onClick={firebase.doSignOut}>Sign Out</Nav.Link>
    </button>
)
>>>>>>> cc26bcb0c6d4f677d6deb0ad38e313120cd9fd76

export default withFirebase(SignOutButton)
