import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './UserExamples.css'

var UserExamples = () => {
    return (
        <div>
            <hr />
            <Row>
                <Col lg={{ span: 2, offset: 2 }}>
                    <h2>
                        <em>User Examples</em>
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col />
            </Row>
            <Row>
                <Col lg={{ span: 2, offset: 1 }}>
                    <img
                        src="https://via.placeholder.com/500x200.jpg"
                        alt="placeholder"
                    />
                </Col>
                <Col lg={{ span: 2, offset: 1 }}>
                    <img
                        src="https://via.placeholder.com/500x200.jpg"
                        alt="placeholder"
                    />
                </Col>
                <Col lg={{ span: 1, offset: 1 }}>
                    <img
                        src="https://via.placeholder.com/500x200.jpg"
                        alt="placeholder"
                    />
                </Col>
            </Row>
        </div>
    )
}

export default UserExamples
