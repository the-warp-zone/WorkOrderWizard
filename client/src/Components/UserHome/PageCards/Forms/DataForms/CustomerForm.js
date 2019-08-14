import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NumberFormat from 'react-number-format'
import axios from 'axios'
class CustomerForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businessName: '',
            phone: null,
            displayPhone: '',
            email: '',
            firstName: '',
            lastName: '',
            nickName: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            posted: false,
            err: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    inputChange = event => {
        //
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    async onSubmit(event) {
        event.preventDefault()
        //
        let data
        let phoneNumber = this.state.phone
        phoneNumber = phoneNumber.replace(/[^\d]/g, '')
        phoneNumber = parseInt(phoneNumber)
        await this.setState({ phone: phoneNumber })
        /* Post goes here */
        const url = 'http://localhost:3001/customer'
        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // }).then(res => {
        //     console.log(res.json())
        // })
        axios
            .post(url, this.state)
            .then(res => {
                console.log(res)
                data = res.data
                this.props.getData(data)
            })
            .catch(err => {
                if (err) {
                    this.setState({
                        err: 'Something went wrong. Please try again.',
                    })
                } else {
                    this.setState({ posted: true })
                    console.log(data)
                }
            })
    }
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.inputChange}
                            type="text"
                            placeholder="First Name"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.inputChange}
                            type="text"
                            placeholder="Last Name"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control
                            value={this.state.businessName}
                            name="businessName"
                            onChange={this.inputChange}
                            type="text"
                            placeholder="Business Name"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            value={this.state.email}
                            onChange={this.inputChange}
                            name="email"
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        {/* Styling needs to be  like that of the other fields */}
                        <NumberFormat
                            format="+1 (###) ###-####"
                            mask="_"
                            value={this.state.phone}
                            onChange={this.inputChange}
                            name="phone"
                        />
                        {/* <Form.Control
                            value={this.state.phone}
                            onChange={this.inputChange}
                            name="phone"
                            type="number"
                            pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
                            placeholder="Phone"
                        /> */}
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        value={this.state.address1}
                        name="address1"
                        onChange={this.inputChange}
                        placeholder="1234 Main St"
                    />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control
                        value={this.state.address2}
                        name="address2"
                        onChange={this.inputChange}
                        placeholder="Apartment, studio, or floor"
                    />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            value={this.state.city}
                            name="city"
                            onChange={this.inputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.state}
                            name="state"
                            onChange={this.inputChange}
                        >
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            value={this.state.zip}
                            name="zip"
                            onChange={this.inputChange}
                        />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                    Submit
                </Button>
                {/* Cancel Button should hide form*/}
                <Button variant="primary" type="submit">
                    Cancel
                </Button>
            </Form>
        )
    }
}

export default CustomerForm
