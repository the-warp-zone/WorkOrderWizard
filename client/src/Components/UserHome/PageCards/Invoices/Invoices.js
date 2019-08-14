import React, { Component } from 'react'
import InvoicesData from './InvoicesData'

const API_ENDPOINT_BASEURL = process.env.API_ENDPOINT_BASEURL || 'http://localhost:';
const PORT = process.env.API_PORT || 3001;
const pageEndpoint = '/invoice/all';

class Invoices extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
		
        fetch(API_ENDPOINT_BASEURL + PORT + pageEndpoint)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }
    render() {
        return <InvoicesData data={this.state.data} />
    }
}

export default Invoices
