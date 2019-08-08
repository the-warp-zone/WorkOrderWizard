import React, { Component } from 'react'
import './signin.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default SignIn
