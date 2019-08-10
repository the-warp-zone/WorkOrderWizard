import React from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const CustomerRow = props => {
    console.log(props)
    // Props should be the API call to get customer data
    var CustomerData = props.data.map(i => (
        <tr>
            <td>
                <Button>Create W.O.</Button>
            </td>
            <td>
                <Button>Create Invoice</Button>
            </td>
            <td>
                <Button>Delete Customer</Button>
            </td>
            <td>{i.firstName + ' ' + i.lastName}</td>
            <td>{i.businessName}</td>
            <td>{i.email}</td>
            <td>{i.phone}</td>
        </tr>
    ))
    return (
        <div>
            <h1>Customers</h1>
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
export default CustomerRow
