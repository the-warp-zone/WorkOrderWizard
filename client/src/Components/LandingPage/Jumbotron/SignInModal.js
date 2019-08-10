import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.close}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SignInModal
