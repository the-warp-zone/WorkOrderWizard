import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const API_ENDPOINT_BASEURL =
    process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost'
const PORT = process.env.REACT_APP_API_PORT || ''
const pageEndpoint = '/api/workorder/'
let url

if (PORT) url = API_ENDPOINT_BASEURL + ':' + PORT + pageEndpoint
else url = API_ENDPOINT_BASEURL + pageEndpoint
console.log(url)

class WorkOrderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createdOn: new Date(),
            dateDue: new Date(),
            customerAssociated: '',
            customerList: [],
            title: '',
            notes: '',
            hoursLogged: 0,
            archived: false,
            deleted: false,
            posted: false,
            err: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    inputChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    handleDate = date => {
        this.setState({ dateDue: date })
    }

    handleCustomers = () => {
        let customer_url = ''
        if (PORT)
            customer_url =
                API_ENDPOINT_BASEURL + ':' + PORT + '/api/customer/all'
        else customer_url = API_ENDPOINT_BASEURL + '/api/customer/all'
        console.log(customer_url)

        var list = []
        var idList = []
        fetch(customer_url)
            .then(response => response.json())
            .then(data => {
                data = data.filter(customer => customer.deleted !== true)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    idList.push(data[i]._id)
                    var fullName = data[i].firstName + ' ' + data[i].lastName
                    list.push([fullName, data[i]._id])
                }
                // Issue when using string to as a replacement for a object id
                this.setState({ customerList: list })
            })
    }
    async onSubmit(event) {
        event.preventDefault()
        //
        for (let i = 0; i < this.state.customerList.length; i++) {
            var index = this.state.customerList[i].indexOf(
                this.state.customerAssociated
            )
            if (index > -1) {
                this.setState({
                    customerAssociated: this.state.customerList[i][index + 1],
                })
            }
        }
        console.log(this.state)
        let data = {
            createdOn: this.state.createdOn,
            dateDue: this.state.dateDue,
            customerID: this.state.customerAssociated,
            archived: this.state.archived,
            deleted: this.state.deleted,
            title: this.state.title,
            notes: this.state.notes,
        }
        /* Post goes here */
        if (this.props.updateType === 'Insert') {
            axios
                .post(url, data)
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
        } else if (this.props.updateType === 'Update') {
            axios
                .put(url + this.props.data._id, this.state)
                .then(res => {
                    console.log(res)

                    data = res.config.data
                    data = JSON.parse(data)
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
    }
    componentDidMount() {
        this.handleCustomers()
        if (this.props.updateType === 'Update') {
            this.setState({
                businessName: this.props.data.businessName,
                phone: this.props.data.phone,
                email: this.props.data.email,
                customerAssociated: this.props.data.customer,
                firstName: this.props.data.firstName,
                lastName: this.props.data.lastName,
                address1: this.props.data.address1,
                address2: this.props.data.address2,
                city: this.props.data.city,
                state: this.props.data.state,
                zip: this.props.data.zip,
            })
        }
    }
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>Work Order</Form.Label>
                        <Form.Control
                            value={this.state.title}
                            name="title"
                            onChange={this.inputChange}
                            type="text"
                            placeholder="Work Order 001"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCustomer">
                        <Form.Label>Customer</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.customerAssociated}
                            name="customerAssociated"
                            onChange={this.inputChange}
                        >
                            <option>Select...</option>
                            {this.state.customerList.map(i => (
                                <option key={i[1]} value={i[1]}>
                                    {i[0]}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="hoursLogged">
                        <Form.Label>Hours Logged</Form.Label>
                        <Form.Control
                            value={this.state.hoursLogged}
                            name="hoursLogged"
                            onChange={this.inputChange}
                            type="number"
                            placeholder="123"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="createdOn">
                        <Form.Label>Created On</Form.Label>
                        <Form.Control
                            value={this.state.createdOn}
                            name="address1"
                            onChange={this.inputChange}
                            placeholder="Is this needed here?"
                        />
                    </Form.Group>

                    <Form.Group controlId="dueDate">
                        <Form.Label>Date Due</Form.Label>
                        <DatePicker
                            selected={this.state.dateDue}
                            onChange={this.handleDate}
                            value={this.state.dateDue}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            value={this.state.notes}
                            name="notes"
                            onChange={this.inputChange}
                            placeholder="Notes for Work Order"
                        />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                    Submit
                </Button>
                {/* Cancel Button should hide form*/}
                <Button
                    variant="primary"
                    type="submit"
                    onClick={this.props.hide}
                >
                    Cancel
                </Button>
            </Form>
        )
    }
}

export default WorkOrderForm
