import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './UserExamples.css';

var UserExamples = () => {
  return (
 <div>
     <hr></hr>
     <Row>
        <Col lg={{ span: 4, offset: 2 }} ><h2 ><em>User Examples</em></h2></Col> 
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

export default UserExamples;
