import React from 'react'
import Button from 'react-bootstrap/Button'

const CustomerRow = props => {
    // Props should be the API call to get customer data
    return (
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
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
        </tr>
    )
}
export default CustomerRow
