import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
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
       <Col lg={{ span: 6, offset: 2 }} className='ctaText'>
            Now that You have seen the awesome power that Work Order Wizard has, do you dare sign a contract? It will be written in Blood.
            <br></br>
            
       </Col>
     </Row>
     <Row>
         <Col></Col>
     </Row>
     <Row>
         <Col lg={{ span: 6, offset: 2 }}>
         <Button variant="success">Sign Up Now</Button>
         </Col>
         
     </Row>
    
     
    
 </div>
  );
};

export default CallToAction;
