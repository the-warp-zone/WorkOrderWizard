import React from 'react'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const WorkOrder = () => {
    return (
        <div>
            <h1>Work Order ID</h1>
            <h3>Created On</h3>
            <h3>Due Date</h3>

            <Button>Edit</Button>
            <h4>Hours</h4>
            <h4>Costs</h4>
            <Button>Add Invoice</Button>
            <Button>Add Cost</Button>
            <div id="description">
                <p>Something something dark side</p>
            </div>
            <DropdownButton id="dropdown-basic-button" title="Completed?">
                <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
                <Dropdown.Item href="#/action-2">No</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default WorkOrder
