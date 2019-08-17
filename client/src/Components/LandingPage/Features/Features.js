import React from 'react'
import './Features.css'
import '../../LandingPage/LandingPage.css'
import '../../../App.css'

var Features = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>
                            <em className="col text-font div-title">
                                Features
                            </em>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-font  ">
                        <ul className="list feature-pad landing-background">
                            <li>Manage Your Customers</li>
                            <li>Create and Archive Work Orders</li>
                            <li>Manage your Invoices and Billing</li>
                            <li>Keep Track of your Costs</li>
                        </ul>
                    </div>
                    <div className="col text-font landing-background feature-pad">
                        <p>
                            Work Order Wizard is your one stop for all of your
                            business accounting. We make sure that you get to
                            spend your time doing what you love and helping your
                            customers, not filling out paperwork. We want to
                            give you the easiest possible method of keeping
                            track of all things business related.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/* <img
                            style={{ height: '200px', width: '350px' }}
                            src={deskPic}
                            alt="desk"
                        /> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Features
