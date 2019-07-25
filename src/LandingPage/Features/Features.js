import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Features.css';

var Features = () => {
    return (
        <div>
            <hr></hr>
            <Row>
                <Col lg={{ span: 4, offset: 2 }} ><h2 ><em className='col'>Features</em></h2></Col>

            </Row>
            <Row>
                <Col></Col>
            </Row>
            <Row>
                <Col lg={{ span: 4, offset: 1 }}>
                    <ul className='list'>
                        <li >This is a feature</li>
                        <li>This is also a feature</li>
                        <li>What is a feature?</li>
                        <li>This feature changed my life</li>
                        <li>This feature saved my marriage</li>
                        <li>I broke into the natural history museum to steal this feature</li>
                    </ul>
                </Col>
                <Col lg={{ span: 3, offset: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu nisi et leo imperdiet euismod. Nulla id volutpat sem. Etiam non massa vitae leo laoreet sollicitudin imperdiet nec tortor. In hac habitasse platea dictumst. Mauris sapien orci, condimentum id lorem vitae, ultricies egestas magna. Duis bibendum pulvinar velit vitae porttitor.
                </Col>
                <Col lg={{ span: 3, offset: 0 }}>
                    <img src='https://via.placeholder.com/500x200.jpg' alt='placeholder'></img>
                </Col>
            </Row>



        </div>
    );
};

export default Features;
