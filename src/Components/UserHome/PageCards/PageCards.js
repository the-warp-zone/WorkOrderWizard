import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './PageCards.css';

var PageCards = () => {
    return (
        <div>
            <Row className='margin-top'>
                <Col lg={{ span: 3  }}></Col>
                <Col lg={{ span: 2  }}>
                    <Card style={{ width: '300px', height: '200px' }} className='shadow-box'>
                        <Card.Body>
                            <Card.Link href="#" className='card-title'>Customers</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={{ span: 1  }}></Col>
                <Col lg={{ span: 2 }}>
                    <Card style={{ width: '300px', height: '200px' }} className='shadow-box'>
                        <Card.Body>
                            <Card.Link href="#" className='card-title'>Work Orders</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='margin-top'>
            <Col lg={{ span: 3  }}></Col>
                <Col lg={{ span: 2 }}>
                    <Card style={{ width: '300px', height: '200px' }} className='shadow-box'>
                        <Card.Body>
                            <Card.Link href="#" className='card-title'>Invoices</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={{ span: 1  }}></Col>
                <Col lg={{ span: 2 }}>
                    <Card style={{ width: '300px', height: '200px' }} className='shadow-box'>
                        <Card.Body>
                            <Card.Link href="#" className='card-title'>Costs</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default PageCards;
