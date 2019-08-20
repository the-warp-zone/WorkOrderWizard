import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import SubmitForm from '../../Forms/Submit'
import './individualCustomerData.css'

class IndividualCustomerData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            submit: '',
            data: this.props.data,
        }
        this.getData = this.getData.bind(this)
    }
    handleShow() {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    editCustomer = () => {
        this.handleShow()
        this.updateSubmit()
    }
    updateSubmit() {
        this.setState({ submit: 'Update' })
    }
    getData(data) {
        // setData(data)
        this.setState({
            data: data,
            show: false,
        })
        this.props.data = data
        this.props.getData(data)
    }
    cancelForm = event => {
        event.preventDefault()
        console.log(this.state.show)
        this.setState({ show: false })
    }
    // Should we provide more info for customer?
    render() {
        return (
            <div className="container customerCard">
                <h1>
                    Customer Name: {this.props.data.firstName}{' '}
                    {this.props.data.lastName}
                </h1>
                <SubmitForm
                    dataType="customer"
                    submitType={this.state.submit}
                    show={this.state.show}
                    hide={this.handleClose}
                    getData={this.props.getData}
                    data={this.props.data}
                    cancel={this.cancelForm}
                />
                <section>
                    <ul>
                        <li>
                            <h3>Email: {this.props.data.email}</h3>
                        </li>
                        <li>
                            <h3>Phone: {this.props.data.phone}</h3>
                        </li>
                        <li>
                            <h3>
                                Business Name: {this.props.data.businessName}
                            </h3>
                        </li>
                        <li>
                            <h3>Address: {this.props.data.address1}</h3>
                        </li>
                        <li>
                            <h3>City: {this.props.data.city}</h3>
                        </li>
                        <li>
                            <h3>State: {this.props.data.state}</h3>
                        </li>
                        <li>
                            <h3>Zip: {this.props.data.zip}</h3>
                        </li>
                    </ul>
                </section>
                <Button
                    datatype="customer"
                    onClick={this.editCustomer}
                    id="edit"
                >
                    Edit
                </Button>
                {/* All relevant  Cards for customer*/}
            </div>
        )
    }
}

export default IndividualCustomerData
