import React from 'react'
import LinkContainer from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav'
import * as firebase from 'firebase'
import Button from 'react-bootstrap/Button'
import Routes from '../../../Constants/routes'
import { withFirebase } from '../Firebase'
import './SignOut.css'

const SignOutButton = ({ firebase }) => (
    <button to={Routes.LANDING} id="edit">
        <Nav.Link onClick={firebase.doSignOut}>Sign Out</Nav.Link>
    </button>
)

export default withFirebase(SignOutButton)
