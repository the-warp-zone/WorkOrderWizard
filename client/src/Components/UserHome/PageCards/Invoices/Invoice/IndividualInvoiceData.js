import React, { Component } from 'react'
import './individualInvoiceData.css'

const IndividualInvoiceData = props => {
    // Should we provide more info for Invoice?
    return (
        <div className="container invoiceCard">
            <section>
                <ul>
                    <li>
                        <h3>Invoice: {props.data._id}</h3>
                    </li>
                    <li>
                        <h3>Amount: {props.data.amountBilled}</h3>
                    </li>
                    <li>
                        <h3>Work Order: {props.data.workOrderID}</h3>
                    </li>
                    <li>
                        <h3>Date Issued:{props.data.dateIssued}</h3>
                    </li>
                    <li>
                        <h3>Paid: {props.data.paid ? 'Yes' : 'No'}</h3>
                    </li>
                </ul>
            </section>

            <div>
                <p>{props.data.notes}</p>
                {/* Image...? */}
            </div>
        </div>
    )
}

export default IndividualInvoiceData
