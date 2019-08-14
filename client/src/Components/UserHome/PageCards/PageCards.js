import React from 'react'
import Card from 'react-bootstrap/Card'
import './PageCards.css'

var PageCards = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <a href="/customers" className="cards">
                        <Card
                            style={{ width: '100%', height: '300px' }}
                            className="shadow-box card-spacing"
                        >
                            <Card.Body>Customers</Card.Body>
                        </Card>
                    </a>
                </div>

                <div className="col-sm-6">
                    <a href="/workorders" className="cards">
                        <Card
                            style={{ width: '100%', height: '300px' }}
                            className="shadow-box card-spacing"
                        >
                            <Card.Body>Work Orders</Card.Body>
                        </Card>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <a href="/invoices" className="cards">
                        <Card
                            style={{ width: '100%', height: '300px' }}
                            className="shadow-box card-spacing"
                        >
                            <Card.Body>Invoices</Card.Body>
                        </Card>
                    </a>
                </div>

                <div className="col-sm-6">
                    <a href="/costs" className="cards">
                        <Card
                            style={{ width: '100%', height: '300px' }}
                            className="shadow-box card-spacing"
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
