import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

const IndividualCustomerData = props => {
    // Should we provide more info for customer?
    return (
        <div>
            <h1>
                Customer Name: {props.data.firstName} {props.data.lastName}
            </h1>

            <h3>Email: {props.data.email}</h3>
            <h3>Phone: {props.data.phone}</h3>
            <Button>Edit</Button>
            {/* All relevant  Cards for customer*/}
        </div>
    )
}

export default IndividualCustomerData
