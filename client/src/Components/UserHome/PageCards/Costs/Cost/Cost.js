import React from 'react'
import Button from 'react-bootstrap/Button'

const Cost = () => {
    //
    return (
        <div>
            <div>
                <h1>Cost ID</h1>
                <h2>Name</h2>
                <h2>Vendor</h2>
                <h2>WO Association</h2>
            </div>
            <div>
                <h3>Date Purchased</h3>
                <h3>Amount</h3>
                <Button>Edit</Button>
            </div>
            <div>
                <h3>Vendor Receipt #</h3>
            </div>
        </div>
    )
}
export default Cost
