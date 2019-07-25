import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Testimonials.css';

var Testimonials = () => {
  return (
 <div>
     <hr></hr>
     <Row>
     <Col lg={{ span: 4, offset: 2 }} ><h2 ><em className='col'>Customer Testimonials</em></h2></Col> 
        
     </Row>
     <Row>
         <Col></Col>
     </Row>
     <Row>
        <Col>"Wow this product is a product that is very good" <em>- That one dude</em></Col>
        <Col>"My life was a tornado of destruction before I found Work Order Wizard" <em>- A Guy</em></Col>  
         
     </Row>
     <Row>
     <Col>"After using work order wizard I learned to fly" <em>- You know that one Lady</em></Col> 
     </Row>
     
    
 </div>
  );
};

export default Testimonials;
