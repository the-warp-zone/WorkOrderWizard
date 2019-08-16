import React from 'react'
import './Testimonials.css'
import '../../../App.css'

var Testimonials = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>
                        <em className="col testimonials div-title">
                            Customer Testimonials
                        </em>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="text-font testi-text landing-background">
                        "Work Order Wizard really helped me manage my business
                        better and be on top of things"
                        <em>- A made up customer</em>
                    </div>
                </div>
                <div className="col">
                    <div className="text-font testi-text landing-background">
                        "It was very easy to use and made my life much simpler"
                        <em>- A figment of imagination</em>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="text-font testi-text landing-background">
                        "I found that organizing my invoices and work orders was
                        much easier after I started using W.O.W"
                        <em>- You know that one Lady</em>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials
