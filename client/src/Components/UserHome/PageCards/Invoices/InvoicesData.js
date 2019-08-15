import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Routes from '../../../../Constants/routes'
import SubmitForm from '../Forms/Submit'

class InvoiceRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            submit: '',
            data: '',
            apiEndpointUrl: 'invoice',
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
    addInvoice = () => {
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

    deleteInvoice = event => {
        let value = event.target.value
        fetch(this.state.apiEndpointUrl + value, {
            method: 'DELETE',
            port: 3001,
        }).then()
    }

    render() {
        var invoiceData = this.props.data.map(i => (
            <tr key={i._id}>
                <td>
                    <Button value={i._id} onClick={this.deleteInvoice}>
                        Archive
                    </Button>
                </td>
                <td>
                    <Link to={Routes.INVOICE + '/' + i._id}>
                        {'INV-' + i._id}
                    </Link>
                </td>
                <td>{'WO-' + i.workOrderID}</td>
                <td>{i.dateIssued}</td>
                <td>{i.paid.toString()}</td>
                <td>{i.open.toString()}</td>
                <td>{i.amountBilled}</td>
            </tr>
        ))
        return (
            <div>
                <div id="invoiceHeader">
                    <h1>Invoices</h1>
                    <Button
                        datatype="invoice"
                        onClick={this.addInvoice}
                        class="col add-button"
                    >
                        +
                    </Button>
                </div>
                <SubmitForm
                    dataType="invoice"
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
                            <th>Invoice ID</th>
                            <th>Associated W.O.</th>
                            <th>Date Issued</th>
                            <th>Date Due</th>
                            <th>Paid (Y/N)</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>{invoiceData}</tbody>
                </Table>
            </div>
        )
    }
}

export default InvoiceRow
