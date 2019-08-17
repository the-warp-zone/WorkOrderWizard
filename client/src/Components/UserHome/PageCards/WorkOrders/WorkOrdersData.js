import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Routes from '../../../../Constants/routes'
import SubmitForm from '../Forms/Submit'
import './WorkOrders.css'

const API_ENDPOINT_BASEURL =
    process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost'
const PORT = process.env.REACT_APP_API_PORT || ''
const pageEndpoint = '/api/workorder/'
let url

if (PORT) url = API_ENDPOINT_BASEURL + ':' + PORT + pageEndpoint
else url = API_ENDPOINT_BASEURL + pageEndpoint
console.log(url)

class WorkOrderData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            submit: '',
            data: '',
        }
        this.getData = this.getData.bind(this)
    }
    handleShow = () => {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    addWorkOrder = () => {
        this.handleShow()
        this.insertSubmit()
    }
    insertSubmit() {
        this.setState({ submit: 'Insert' })
    }
    getData(data) {
        // setData(data)
        if (data) {
            this.setState({ data: data })

            if (this.props.data.indexOf(data) === -1) this.props.data.push(data)
        }
        this.handleClose()
    }
    deleteWorkOrder(event) {
        let value = event.target.value
        console.log(value)

        // remove deleted row from component and re-render component
        fetch(url + value, { method: 'DELETE' }).then()
        // send delete command to API
    }
    cancelForm = event => {
        event.preventDefault()
        console.log(this.state.show)
        this.setState({ show: false })
    }
    render() {
        const WorkOrderRows = this.props.data.map(i => (
            <tr key={i._id}>
                <td>
                    <Button>Archive</Button>
                </td>
                <td>
                    <Link to={Routes.WORK_ORDER + '/' + i._id}>
                        {'WO-' + i._id}
                    </Link>
                </td>
                <td>{i.title}</td>
                <td>{'C-' + i.customerID}</td>
                <td>{i.createdOn}</td>
                <td>{i.dateDue}</td>
                <td>{i.hoursLogged}</td>
            </tr>
        ))
        return (
            <div className="container">
                <h1>Work Orders</h1>
                <Button datatype="workorder" onClick={this.addWorkOrder}>
                    + Create New Work Order
                </Button>
                <SubmitForm
                    dataType="workorder"
                    submitType={this.state.submit}
                    show={this.state.show}
                    hide={this.handleClose}
                    getData={this.getData}
                    cancel={this.cancelForm}
                />
                {/* Table */}
                <div className="workOrdersTable">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Work Order ID</th>
                                <th>Work Order Title</th>
                                <th>Customer ID</th>
                                <th>Created On</th>
                                <th>Date Due</th>
                                <th>Hours Logged</th>
                            </tr>
                        </thead>
                        <tbody>{WorkOrderRows}</tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default WorkOrderData
