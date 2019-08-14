import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Searchbar.css'

var Searchbar = () => {
    return (
        <div className="margin">
            <div className="row">
                <div className="col mr-9">
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
