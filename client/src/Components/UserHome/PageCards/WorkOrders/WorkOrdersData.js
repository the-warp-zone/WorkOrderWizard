import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Routes from '../../../../Constants/routes'

const WorkOrderData = props => {
    console.log(props.data)
    var WorkOrderRows = props.data.map(i => (
        <tr>
            <td>
                <Button>Archive</Button>
            </td>
            <td>
                <Link to={Routes.WORK_ORDER + '/' + i._id}>
                    {'WO-' + i._id}
                </Link>
            </td>
            <td>{'C-' + i.customerID}</td>
            <td>{i.createdOn}</td>
            <td>{i.dateDue}</td>
            <td>{i.hoursLogged}</td>
        </tr>
    ))
    return (
        <div>
            <h1>Work Orders</h1>
            {/* Table */}
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Work Order ID</th>
                        <th>Customer ID</th>
                        <th>Created On</th>
                        <th>Date Due</th>
                        <th>Hours Logged</th>
                    </tr>
                </thead>
                <tbody>{WorkOrderRows}</tbody>
            </Table>
        </div>
    )
}

export default WorkOrderData
