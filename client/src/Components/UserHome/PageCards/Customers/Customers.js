import React, { Component } from 'react'
import CustomersData from './CustomersData'

const API_ENDPOINT_BASEURL = process.env.API_ENDPOINT_BASEURL || 'http://localhost:';
const PORT = process.env.API_PORT || 3001;
const pageEndpoint = '/customer/all';

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
        
        fetch(API_ENDPOINT_BASEURL + PORT + pageEndpoint)
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
