import React from 'react'
import Button from 'react-bootstrap/Button'
import './individualCostData.css'

const IndividualCostData = props => {
    //
    console.log(props.data)
    return (
        <div className="container costCard">
            <div>
                <ul>
                    <li>
                        <h3>ID: {props.data._id}</h3>
                    </li>
                    <li>
                        <h3>Name: {props.data.costName}</h3>
                    </li>
                    <li>
                        <h3>Vendor: {props.data.vendor}</h3>
                    </li>
                    <li>
                        <h3>Work Order ID: {props.data.workOrderID}</h3>
                    </li>
                    <li>
                        <h3>Date Purchased: {props.data.datePurchased}</h3>
                    </li>
                    <li>
                        <h3>Amount Billed: {props.data.amount}</h3>
                    </li>
                    <li>
                        <h3>Receipt: {props.data.vendorReceiptSN}</h3>
                    </li>
                </ul>
                <Button id="edit">Edit</Button>
            </div>
        </div>
    )
}

export default IndividualCostData
