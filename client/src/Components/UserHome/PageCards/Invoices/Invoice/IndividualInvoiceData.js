import React, { Component } from 'react'

const IndividualInvoiceData = props => {
    // Should we provide more info for Invoice?
    return (
        <div>
            <div>
                <h1>Invoice: {props.data._id}</h1>
                <h3>Customer Name: {/* Need Customer Name here */}</h3>
                <h3>Amount: {props.data.amountBilled}</h3>
            </div>
            <div>
                <h3>Work Order: {props.data.workOrderID}</h3>
                <h3>Date Issued:{props.data.dateIssued}</h3>
                <h3>Paid: {props.data.paid ? 'Yes' : 'No'}</h3>
            </div>
            <div>
                <h4>Notes / Desc</h4>

                <h4>Billing Address</h4>
            </div>

            <div>
                <p>{props.data.notes}</p>
                {/* Image...? */}
            </div>
        </div>
    )
}

export default IndividualInvoiceData
