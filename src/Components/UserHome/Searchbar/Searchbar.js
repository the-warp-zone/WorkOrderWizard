import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Searchbar.css'


var Searchbar = () => {
    return (
        <div className='margin'>
            <Row>
                <Col lg={{ span: 10}}>
                </Col>
                <Col lg={{ span: 2}}>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> 
                </Col>
            </Row>
            </div>
      
    )
}

export default Searchbar;
