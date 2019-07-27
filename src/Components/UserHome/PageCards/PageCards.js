import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './PageCards.css'

var PageCards = () => {
    return (
        <div>
            <Row className="margin-top">
                <Col lg={{ span: 3 }}></Col>
                <Col lg={{ span: 2 }}>
                    <a href="#" className="card-title">
                        <Card
                            style={{ width: '300px', height: '200px' }}
                            className="shadow-box"
                        >
                            <Card.Body>Customers</Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col lg={{ span: 1 }}></Col>
                <Col lg={{ span: 2 }}>
                    <a href="#" className="card-title">
                        <Card
                            style={{ width: '300px', height: '200px' }}
                            className="shadow-box"
                        >
                            <Card.Body>Work Orders</Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
            <Row className="margin-top">
                <Col lg={{ span: 3 }}></Col>
                <Col lg={{ span: 2 }}>
                    <a href="#" className="card-title">
                        <Card
                            style={{ width: '300px', height: '200px' }}
                            className="shadow-box"
                        >
                            <Card.Body>Invoices</Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col lg={{ span: 1 }}></Col>
                <Col lg={{ span: 2 }}>
                    <a href="#" className="card-title">
                        <Card
                            style={{ width: '300px', height: '200px' }}
                            className="shadow-box"
                        >
                            <Card.Body>Costs</Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default PageCards
