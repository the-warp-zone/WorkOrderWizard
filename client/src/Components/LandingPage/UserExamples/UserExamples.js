import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './UserExamples.css'

var UserExamples = () => {
    return (
        <div>
            <hr />
            <Row>
                {/* lg={{ span: 2, offset: 2 }} */}
                <Col className="header">
                    <h2>
                        <em>User Examples</em>
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col />
            </Row>
            <Row>
                {/* lg={{ span: 2, offset: 1 }} */}
                <Col>
                    <img
                        src="https://via.placeholder.com/500x200.jpg"
                        alt="placeholder"
                    />
                </Col>
                {/* lg={{ span: 2, offset: 1 }} */}
                <Col>
                    <img
                        src="https://via.placeholder.com/500x200.jpg"
                        alt="placeholder"
                    />
                </Col>
                {/* lg={{ span: 1, offset: 1 }} */}
                <Col>
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
