import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

var Customers = () => {
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
                            <th>#</th>
                            <th>Name</th>
                            <th>Business Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
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
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
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
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Customers
