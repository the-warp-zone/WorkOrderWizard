import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './PageCards.css'

var PageCards = () => {
    return (
        <div className="container">
            <div className="row margin-top">
                <div className="col px-md-5">
                    <a href="#" className="cards">
                        <Card
                            style={{ width: '300px', height: '200px' }}
                            className="shadow-box"
                        >
                            <Card.Body>Customers</Card.Body>
                        </Card>
                    </a>
                </div>

                <div className="col px-md-5">
                    <a href="#" className="cards">
                        <Card
                            style={{ width: '300px', height: '200px' }}
                            className="shadow-box"
                        >
                            <Card.Body>Work Orders</Card.Body>
                        </Card>
                    </a>
                </div>
            </div>
            <div className="row margin-top">
                <div className="col px-md-5">
                    <a href="#" className="cards">
                        <Card
                            style={{ width: '300px', height: '200px' }}
                            className="shadow-box"
                        >
                            <Card.Body>Invoices</Card.Body>
                        </Card>
                    </a>
                </div>

                <div className="col px-md-5">
                    <a href="#" className="cards">
                        <Card
                            style={{ width: '300px', height: '200px' }}
                            className="shadow-box"
                        >
                            <Card.Body>Costs</Card.Body>
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PageCards
