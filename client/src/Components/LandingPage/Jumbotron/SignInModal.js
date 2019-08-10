import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { withFirebase } from '../../../Constants/Firebase/'
import * as ROUTES from '../../../Constants/routes'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const SignInModal = props => {
    return (
        <Modal
            show={props.show}
            onHide={props.close}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sign In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Welcome Back!</h4>
                <p>User Log in</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.close}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
)
const SignUpForm = withRouter(withFirebase(SignUpFormBase))

export default SignInModal

export { SignUpForm, SignUpLink }
