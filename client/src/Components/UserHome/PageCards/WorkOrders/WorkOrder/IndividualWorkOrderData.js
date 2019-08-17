import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SubmitForm from '../../Forms/Submit'

class IndividualWorkOrderData extends Component {
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
    editWorkOrder = () => {
        this.handleShow()
        this.updateSubmit()
    }
    updateSubmit() {
        this.setState({ submit: 'Update' })
    }
    getData(data) {
        // setData(data)
        if (data) {
            this.setState({ data: data, show: false })
            this.props.data = data
        }
    }
    cancelForm = event => {
        event.preventDefault()
        console.log(this.state.show)
        this.setState({ show: false })
    }
    render() {
        console.log(this.props.data)
        return (
            <div>
                <section>
                    <ul>
                        <li>
                            <h3>Work Order: {this.props.data._id}</h3>
                        </li>
                        <li>
                            <h3>Created On: {this.props.data.createdOn}</h3>
                        </li>
                        <li>
                            <h3>Due Date: {this.props.data.dateDue}</h3>
                        </li>
                        <li>
                            <h4>Hours Logged: {this.props.data.hoursLogged}</h4>
                        </li>
                        <li>
                            <h4>Costs</h4>
                        </li>
                    </ul>
                </section>
                <SubmitForm
                    dataType="workorder"
                    submitType={this.state.submit}
                    show={this.state.show}
                    hide={this.handleClose}
                    getData={this.props.getData}
                    data={this.props.data}
                    cancel={this.cancelForm}
                />
                <Button
                    datatype="workorder"
                    onClick={this.editWorkOrder}
                    id="edit"
                >
                    Edit
                </Button>

                <Button id="edit">Add Invoice</Button>
                <Button id="edit">Add Cost</Button>
                <DropdownButton
                    id="dropdown-basic-button"
                    id="edit"
                    title="Completed?"
                >
                    <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">No</Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }
}

export default IndividualWorkOrderData
