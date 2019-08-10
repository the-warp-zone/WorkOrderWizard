import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const WorkOrders = () => {
    return (
        <div>
            <h1>Work Orders</h1>
            {/* Table */}
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Work Order ID</th>
                        <th>Customer</th>
                        <th>Created On</th>
                        <th>Due Date</th>
                        <th>Sort</th>
                        <th>Filter</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Button>Archive</Button>
                        </td>
                        <td>WO123456789</td>
                        <td>Obiwan Kenobi</td>
                        <td>1 BBY</td>
                        <td>0 ABY</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <Button>Archive</Button>
                        </td>
                        <td>WO987654321</td>
                        <td>Anakin Skywalker</td>
                        <td>18 BBY</td>
                        <td>17 BBY</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <Button>Archive</Button>
                        </td>
                        <td>WO321654987</td>
                        <td>Mace Windu</td>
                        <td>18 BBY</td>
                        <td>18 BBY</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default WorkOrders
