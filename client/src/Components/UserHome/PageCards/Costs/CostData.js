import React from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const CostData = props => {
    //
    var CostRows = props.data.map(i => (
        <tr key={i._id}>
            <td>
                <Button>Archive</Button>
            </td>
            <td>
                <Button>Delete</Button>
            </td>
            <td>{'CO-' + i._id}</td>
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
            <h1>Cost</h1>
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

export default CostData
