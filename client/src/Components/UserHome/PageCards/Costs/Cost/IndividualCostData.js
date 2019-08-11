import React from 'react'
import Button from 'react-bootstrap/Button'

const IndividualCostData = props => {
    //
    console.log(props.data)
    return (
        <div>
            <div>
                <h1>{props.data._id}</h1>
                <h2>{props.data.costName}</h2>
                <h2>{props.data.vendor}</h2>
                <h2>{props.data.workOrderID}</h2>
            </div>
            <div>
                <h3>{props.data.datePurchased}</h3>
                <h3>{props.data.amount}</h3>
                <Button>Edit</Button>
            </div>
            <div>
                <h3>{props.data.vendorReceiptSN}</h3>
            </div>
        </div>
    )
}

export default IndividualCostData
