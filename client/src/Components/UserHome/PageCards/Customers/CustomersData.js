import React from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import Routes from '../../../../Constants/routes'
import SubmitForm from '../Forms/Submit'

const apiEndpointUrl = "http://localhost:3001/customer/"

const CustomersData = props => {
    const [show, setShow] = React.useState(false)
    const [submit, setSubmit] = React.useState('')
    const editSubmit = () => setSubmit('Update')
    const insertSubmit = () => setSubmit('Insert')
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    console.log(show)
    console.log(submit)
    var addCustomer = () => {
        handleShow()
        insertSubmit()
    }
	
	function deleteCustomer(event) {
		let value = event.target.value;
		console.log(value);
		// remove deleted row from component and re-render component
		
		fetch(apiEndpointUrl + value, {method: 'DELETE'}).then(); // send delete command to API
	}
    // Props should be the API call to get customer data
    var CustomerData = props.data.map(i => (
        <tr key={i._id}>
            <td>
                <Button>Create W.O.</Button>
            </td>
            <td>
                <Button>Create Invoice</Button>
            </td>
            <td>
<Button value={i._id} onClick={deleteCustomer}>Delete Customer</Button>
            </td>
            <td>
                <Link to={Routes.CUSTOMER + '/' + i._id}>
                    {i.firstName + ' ' + i.lastName}
                </Link>
            </td>
            <td>{i.businessName}</td>
            <td>{i.email}</td>
            <td>{i.phone}</td>
        </tr>
    ))
    return (
        <div>
            <div id="customerHeader">
                <h1>Customers</h1>
                <Button datatype="customer" onClick={addCustomer}>
                    +
                </Button>
            </div>
            <SubmitForm
                dataType="customer"
                submitType={submit}
                show={show}
                hide={handleClose}
            />

            <div>
                <Table responsive="md">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Business Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>{CustomerData}</tbody>
                </Table>
            </div>
        </div>
    )
}
export default CustomersData
