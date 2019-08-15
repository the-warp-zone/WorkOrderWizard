import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import Routes from '../../../../Constants/routes'
import SubmitForm from '../Forms/Submit'
import './Customers.css';

class CustomersData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            submit: '',
            data: '',
            apiEndpointUrl: '/customer/',
        }
        this.getData = this.getData.bind(this)
    }
    handleShow() {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    addCustomer = () => {
        this.handleShow()
        this.insertSubmit()
    }
    insertSubmit() {
        this.setState({ submit: 'Insert' })
    }
    getData(data) {
        // setData(data)
        this.setState({ data: data })
        console.log('This is the data: ')
        console.log(data)
        let calledIt = data
        if (calledIt) {
            if (this.props.data.indexOf(calledIt) === -1)
                this.props.data.push(calledIt)
            // for (let i = 0; i < this.props.data; i++) {
            //     if (this.props.data[i] === calledIt) {
            //         break
            //     }
            //     this.props.data.push(calledIt)
            //     console.log(this.props.data)
            // }
        }
    }
    deleteCustomer(event) {
        let value = event.target.value
        console.log(value)

        // remove deleted row from component and re-render component
        fetch(this.state.apiEndpointUrl + value, { method: 'DELETE', port: 3001 }).then()
        // send delete command to API
    }
    // Props should be the API call to get customer data

    render() {
        const CustomerData = this.props.data.map(i => (
            <tr key={i._id}>
                <td>
                    <Button variant="success">Create W.O.</Button>
                </td>
                <td>
                    <Button variant="success">Create Invoice</Button>
                </td>
                <td>
                    <Button value={i._id} onClick={this.deleteCustomer} variant="success">
                        Delete Customer
                    </Button>
                </td>
                <td>
                    <Link to={Routes.CUSTOMER + '/' + i._id}>
                        {i.firstName + ' ' + i.lastName}
                    </Link>
                </td>
                <td>{i.businessName}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
            </tr>
        ))
        return (
            <div>
                <div class="row" id="customerHeader">
                    
                    <h1 class="col">Customers
                    <Button datatype="customer" onClick={this.addCustomer} class="col add-button" variant="success">
                        +
                    </Button>
                    </h1>

                    
                </div>
                <SubmitForm
                    dataType="customer"
                    submitType={this.state.submit}
                    show={this.state.show}
                    hide={this.handleClose}
                    getData={this.getData}
                />

                <div>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Name</th>
                                <th>Business Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>{CustomerData}</tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
export default CustomersData
