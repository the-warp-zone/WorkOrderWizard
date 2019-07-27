import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './PageCards.css';

var PageCards = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }} lg={{ span: 2, offset: 2 }}>
                        <Card.Body>
                            <Card.Link href="#">Customers</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PageCards;
