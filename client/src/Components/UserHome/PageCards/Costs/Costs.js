import React from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const Costs = () => {
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
                        <th>Assignment?</th>
                        <th>W.O.</th>
                        <th>ID</th>
                        <th>Date Purchased</th>
                        <th>Amount</th>
                        {/* <th>Sort</th>
                        <th>Filter</th>
                        Do we have these as options for each column? */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Button>Archive</Button>
                        </td>
                        <td>
                            <Button>Delete</Button>
                        </td>
                        <td>CO-0000001</td>
                        <td>Obiwan Kenobi</td>
                        <td>Tattoine Bar</td>
                        <td>?</td>
                        <td>123456789</td>
                        <td>1 BBY</td>
                        <td>$2,000,000</td>
                    </tr>
                    <tr>
                        <td>
                            <Button>Archive</Button>
                        </td>
                        <td>
                            <Button>Delete</Button>
                        </td>
                        <td>CO-0000002</td>
                        <td>Luke Skylwaker</td>
                        <td>Rebellion</td>
                        <td>?</td>
                        <td>123456790</td>
                        <td>1 BBY</td>
                        <td>$9,000</td>
                    </tr>
                    <tr>
                        <td>
                            <Button>Archive</Button>
                        </td>
                        <td>
                            <Button>Delete</Button>
                        </td>
                        <td>CO-0000003</td>
                        <td>Darth Vader</td>
                        <td>Galactic Empire</td>
                        <td>?</td>
                        <td>123456791</td>
                        <td>1 BBY</td>
                        <td>$50,000,000</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Costs
