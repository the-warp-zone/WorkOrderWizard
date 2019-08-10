import React from 'react'

const Invoice = () => {
    // function for getting individual invoice data
    return (
        <div>
            <div>
                <h1>Invoice</h1>
                <h3>Customer Name</h3>
                <h3>Amount</h3>
            </div>
            <div>
                <h3>Work Order</h3>
                <h3>Date Issued:</h3>
                <h3>Paid</h3>
            </div>
            <div>
                <h4>Notes / Desc</h4>
                <h4>Billing Address</h4>
            </div>

            <div>
                <h4>VIEW HERE</h4>
                {/* Image...? */}
            </div>
        </div>
    )
}

export default Invoice
