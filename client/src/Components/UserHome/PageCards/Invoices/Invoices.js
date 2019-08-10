import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const Invoices = () => {
    return (
        <div>
            <h1>Invoices</h1>
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Invoice ID</th>
                        <th>Customer</th>
                        <th>Associated W.O.</th>
                        <th>Date Issued</th>
                        <th>Date Due</th>
                        <th>Paid (Y/N)</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Button>Archive</Button>
                        </td>
                        <td>INV-0000001</td>
                        <td>Obiwan Kenobi</td>
                        <td>123456789</td>
                        <td>18 BBY</td>
                        <td>17 BBY</td>
                        <td>Y</td>
                        <td>$20</td>
                    </tr>
                    <tr>
                        <td>
                            <Button>Archive</Button>
                        </td>
                        <td>INV-0000002</td>
                        <td>Obiwan Kenobi</td>
                        <td>123456789</td>
                        <td>1 BBY</td>
                        <td>0 ABY</td>
                        <td>N</td>
                        <td>$2,000,000</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Invoices
