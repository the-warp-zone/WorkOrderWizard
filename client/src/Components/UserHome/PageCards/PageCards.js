import React from 'react'
import Card from 'react-bootstrap/Card'
import './PageCards.css'
import { Link } from 'react-router-dom'
import Routes from '../../../Constants/routes'

var PageCards = () => {
    return (
        <div className="container" style={{ marginTop: '2vh' }} >
            <div className="row" >
                <div className="col-sm-6 col-xs-12 card-column">
                    <Link to={Routes.CUSTOMERS} className="cards">
                        <Card
                            
                            className="shadow-box card-spacing"
                        >
                            <Card.Body>Customers</Card.Body>
                        </Card>
                    </Link>
                </div>

                <div className="col-sm-6 col-xs-12 card-column">
                    <Link to={Routes.WORK_ORDERS} className="cards">
                        <Card
                            className="shadow-box card-spacing"
                        >
                            <Card.Body>Work&nbsp;Orders</Card.Body>
                        </Card>
                    </Link>
                </div>
            
                <div className="col-sm-6 col-xs-12 card-column">
                    <Link to={Routes.INVOICES} className="cards">
                        <Card
                            className="shadow-box card-spacing"
                        >
                            <Card.Body>Invoices</Card.Body>
                        </Card>
                    </Link>
                </div>

                <div className="col-sm-6 col-xs-12 card-column">
                    <Link to={Routes.COSTS} className="cards">
                        <Card
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
