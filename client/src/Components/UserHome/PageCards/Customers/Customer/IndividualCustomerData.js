import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import SubmitForm from '../../Forms/Submit'

class IndividualCustomerData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            submit: '',
            data: '',
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
        if (data) {
            this.setState({ data: data })
        }
        this.handleClose()
    }
    cancelForm = event => {
        event.preventDefault()
        console.log(this.state.show)
        this.setState({ show: false })
    }
    // Should we provide more info for customer?
    render() {
        return (
            <div>
                <h1>
                    Customer Name: {this.props.data.firstName}{' '}
                    {this.props.data.lastName}
                </h1>
                <SubmitForm
                    dataType="customer"
                    submitType={this.state.submit}
                    show={this.state.show}
                    hide={this.handleClose}
                    getData={this.getData}
                    cancel={this.cancelForm}
                />
                <h3>Email: {this.props.data.email}</h3>
                <h3>Phone: {this.props.data.phone}</h3>
                <Button
                    modeltype="customer"
                    onClick={this.editCustomer}
                    posttype={this.state.submit}
                    data={this.props.data}
                    getdata={this.getData}
                >
                    Edit
                </Button>
                {/* All relevant  Cards for customer*/}
            </div>
        )
    }
}

export default IndividualCustomerData
