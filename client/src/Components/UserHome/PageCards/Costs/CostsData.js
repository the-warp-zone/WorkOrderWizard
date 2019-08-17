import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import Routes from '../../../../Constants/routes'
import SubmitForm from '../Forms/Submit'

const API_ENDPOINT_BASEURL = process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost';
const PORT = process.env.REACT_APP_API_PORT || '';
const pageEndpoint = '/api/cost/';
let url;

if (PORT) url = API_ENDPOINT_BASEURL + ":" + PORT + pageEndpoint;
else url = API_ENDPOINT_BASEURL + pageEndpoint;
console.log(url);

class CostData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            submit: '',
            data: ''
        }
        this.getData = this.getData.bind(this)
    }
    handleShow() {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    insertSubmit() {
        this.setState({ submit: 'Insert' })
    }
    addCost = () => {
        this.handleShow()
        this.insertSubmit()
    }
    getData(data) {
        if (data) {
            this.setState({ data: data })
            if (this.props.data.indexOf(data) === -1) this.props.data.push(data)
        }
        this.handleClose()
    }
    cancelForm = event => {
        event.preventDefault()
        this.setState({ show: false })
    }
    deleteCost = event => {
        let value = event.target.value
        fetch(url + value, {
            method: 'DELETE'
        }).then()
    }
    render() {
        var CostRows = this.props.data.map(i => (
            <tr key={i._id}>
                <td>
                    <Button>Archive</Button>
                </td>
                <td>
                    <Button value={i._id} onClick={this.deleteCost}>
                        Delete
                    </Button>
                </td>
                <td>
                    <Link to={Routes.COST + '/' + i._id}>{'CO-' + i._id}</Link>
                </td>
                <td>{i.costName}</td>
                <td>{i.vendor}</td>
                <td>{i.vendorReceiptSN}</td>
                <td>{i.datePurchased}</td>
                <td>{i.amount}</td>
                <td>{i.workOrderID}</td>
            </tr>
        ))
        return (
            <div>
                <div id="costHeader">
                    <h1>Cost</h1>
                    <Button
                        datatype="cost"
                        onClick={this.addCost}
                        className="add-button"
                    >
                       + Create New Work Cost
                    </Button>
                </div>
                <SubmitForm
                    dataType="cost"
                    submitType={this.state.submit}
                    show={this.state.show}
                    hide={this.handleClose}
                    getData={this.getData}
                    cancel={this.cancelForm}
                />
                <Table responsive>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Cost ID</th>
                            <th>Name</th>
                            <th>Vendor</th>
                            <th>Vendor Receipt</th>
                            <th>Date Purchased</th>
                            <th>Amount</th>
                            <th>W.O.</th>

                            {/* <th>Sort</th>
                    <th>Filter</th>
                    Do we have these as options for each column? */}
                        </tr>
                    </thead>
                    <tbody>{CostRows}</tbody>
                </Table>
            </div>
        )
    }
}

export default CostData
