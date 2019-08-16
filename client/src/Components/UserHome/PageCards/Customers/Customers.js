import React, { Component } from 'react'
import CustomersData from './CustomersData'

const API_ENDPOINT_BASEURL = process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost';
const PORT = process.env.REACT_APP_API_PORT || '';
const pageEndpoint = '/api/customer/all';
let url;

if (PORT) url = API_ENDPOINT_BASEURL + ":" + PORT + pageEndpoint;
else url = API_ENDPOINT_BASEURL + pageEndpoint;
console.log(url);

function checkNotDeleted(customer) {
		return customer.deleted !== true;
	}

class Customers extends Component {
    state = {
        data: [],
        posted: false,
        err: '',
    }
	
    componentDidMount() {
        
        fetch(url)
            .then(response => response.json())
			.then(data => {
							return this.setState({ data: data.filter(checkNotDeleted)});
			});
    }
    submit() {}
    
    handleHide = () => {
        this.setState({ show: false })
    }
    render() {
        return <CustomersData data={this.state.data} />
    }
}

export default Customers
