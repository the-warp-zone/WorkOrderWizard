import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CustomerRow from './CustomerRow'

var Customers = () => {
    const url = 'http://localhost:3001/customer/all'
    console.log('fetching:\t' + url)
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
    let CustomerData = [].map(i => {
        return <CustomerRow />
    })

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
                        <CustomerRow />
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Customers
