import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const InvoiceRow = props => {
    var invoiceData = props.data.map(i => (
        <tr key={i._id}>
            <td>
                <Button>Archive</Button>
            </td>
            <td>{'INV-' + i._id}</td>
            <td>{'WO-' + i.workOrderID}</td>
            <td>{i.dateIssued}</td>
            <td>{i.paid.toString()}</td>
            <td>{i.open.toString()}</td>
            <td>{i.amountBilled}</td>
        </tr>
    ))
    return (
        <div>
            <h1>Invoices</h1>
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

export default InvoiceRow
