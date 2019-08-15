import React from 'react'
import Card from 'react-bootstrap/Card'
import './PageCards.css'
import { Link } from 'react-router-dom'
import Routes from '../../../Constants/routes'

var PageCards = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <Link to={Routes.CUSTOMERS} className="cards">
                        <Card
                            style={{ width: '100%', height: '300px' }}
                            className="shadow-box card-spacing"
                        >
                            <Card.Body>Customers</Card.Body>
                        </Card>
                    </Link>
                </div>

                <div className="col-sm-6">
                    <Link to={Routes.WORK_ORDERS} className="cards">
                        <Card
                            style={{ width: '100%', height: '300px' }}
                            className="shadow-box card-spacing"
                        >
                            <Card.Body>Work Orders</Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <Link to={Routes.INVOICES} className="cards">
                        <Card
                            style={{ width: '100%', height: '300px' }}
                            className="shadow-box card-spacing"
                        >
                            <Card.Body>Invoices</Card.Body>
                        </Card>
                    </Link>
                </div>

                <div className="col-sm-6">
                    <Link to={Routes.COSTS} className="cards">
                        <Card
                            style={{ width: '100%', height: '300px' }}
                            className="shadow-box card-spacing"
                        >
                            <Card.Body>Costs</Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageCards
