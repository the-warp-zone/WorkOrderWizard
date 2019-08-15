import React, { Component } from 'react'
import { Schema } from 'mongoose'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class InvoiceForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paid: false,
            open: false,
            title: '',
            amountBilled: 0,
            dateIssued: new Date(),
            workOrderID: Schema.Types.ObjectId,
            notes: '',
            billingAddress: '',
            archived: false,
            deleted: false,
            customerID: Schema.Types.ObjectId,
            workOrderList: [],
            workOrderAssociated: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    inputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleWorkOrders = () => {
        const url = 'http://localhost:3001/workorder/all'
        var list = []
        var idList = []
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data = data.filter(workorder => workorder.title !== false)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    idList.push(data[i]._id)
                    list.push([data[i].title, data[i]._id])
                }
                // Issue when using string to as a replacement for a object id
                this.setState({ workOrderList: list })
            })
    }
    async onSubmit(event) {
        event.preventDefault()
        //
        for (let i = 0; i < this.state.workOrderList.length; i++) {
            var index = this.state.workOrderList[i].indexOf(
                this.state.workOrderID
            )
            if (index > -1) {
                this.setState({
                    workOrderAssociated: this.state.workOrderList[i][index + 1],
                })
            }
        }
        let data = {
            paid: this.state.paid,
            open: true,
            title: this.state.title,
            amountBilled: this.state.amountBilled,
            dateIssued: this.state.dateIssued,
            workOrderID: this.state.workOrderAssociated,
            notes: this.state.notes,
            billingAddress: this.state.billingAddress,
            archived: false,
            deleted: false,
        }
        /* Post goes here */
        const url = 'http://localhost:3001/invoice'
        axios
            .post(url, data)
            .then(res => {
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
    componentDidMount() {
        this.handleWorkOrders()
    }
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>Invoice</Form.Label>
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
                    <Form.Group as={Col} controlId="formGridWorkOrder">
                        <Form.Label>Work Order</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.workOrderAssociated}
                            name="workOrderAssociated"
                            onChange={this.inputChange}
                        >
                            <option>Select...</option>
                            {this.state.workOrderList.map(i => (
                                <option key={i[1]} value={i[1]}>
                                    {i[0]}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="hoursLogged">
                        <Form.Label>Amount to Bill</Form.Label>
                        <Form.Control
                            value={this.state.amountBilled}
                            name="amountBilled"
                            onChange={this.inputChange}
                            type="number"
                            placeholder="350"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="billingAddress">
                        <Form.Label>Billing Address</Form.Label>
                        <Form.Control
                            value={this.state.billingAddress}
                            name="billingAddress"
                            onChange={this.inputChange}
                            placeholder="123 Main St"
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="notes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            value={this.state.notes}
                            name="notes"
                            onChange={this.inputChange}
                            placeholder="Notes for Invoice"
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

export default InvoiceForm
