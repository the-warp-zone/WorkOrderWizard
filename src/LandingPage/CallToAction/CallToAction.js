import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CallToAction.css';

var CallToAction = () => {
  return (
 <div>
     <hr></hr>
     <Row>
        <Col lg={{ span: 4, offset: 2 }} ><h2 ><em>Get Work Order Wizard Today</em></h2></Col> 
     </Row>
     <Row>
         <Col></Col>
     </Row>
     <Row>
        <Col lg={{ span: 3, offset: 1 }}>
                    <img src='https://via.placeholder.com/500x200.jpg' alt='placeholder'></img>
        </Col>
        <Col lg={{ span: 3, offset: 1 }}>
                    <img src='https://via.placeholder.com/500x200.jpg' alt='placeholder'></img>
        </Col>
        <Col lg={{ span: 3, offset: 1 }}>
                    <img src='https://via.placeholder.com/500x200.jpg' alt='placeholder'></img>
        </Col>
     </Row>
    
     
    
 </div>
  );
};

export default CallToAction;
