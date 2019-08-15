import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class CostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            costName: '',
            vendorReceiptSN: '',
            vendor: '',
            datePurchased: new Date(),
            amount: 0,
            archived: false,
            deleted: false,
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
        console.log('WO: ' + this.state.workOrderAssociated)
        let data = {
            costName: this.state.costName,
            amount: this.state.amount,
            datePurchased: this.state.datePurchased,
            workOrderID: this.state.workOrderAssociated,
            notes: this.state.notes,
            vendor: this.state.vendor,
            vendorReceiptSN: this.state.vendorReceiptSN,
            archived: false,
            deleted: false,
        }
        /* Post goes here */
        const url = 'http://localhost:3001/cost'
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
                        <Form.Label>Cost</Form.Label>
                        <Form.Control
                            value={this.state.costName}
                            name="costName"
                            onChange={this.inputChange}
                            type="text"
                            placeholder="Expense #001"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="vendor">
                        <Form.Label>Vendor</Form.Label>
                        <Form.Control
                            value={this.state.vendor}
                            name="vendor"
                            onChange={this.inputChange}
                            placeholder="Dome Hepot"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="vendorReceipt">
                        <Form.Label>Vendor Receipt</Form.Label>
                        <Form.Control
                            value={this.state.vendorReceiptSN}
                            name="vendorReceiptSN"
                            onChange={this.inputChange}
                            placeholder="#1234567890"
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
                    <Form.Group as={Col} controlId="amount">
                        <Form.Label>Cost Amount</Form.Label>
                        <Form.Control
                            value={this.state.amount}
                            name="amount"
                            onChange={this.inputChange}
                            type="number"
                            placeholder="25"
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
                            placeholder="Notes for Cost"
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

export default CostForm
