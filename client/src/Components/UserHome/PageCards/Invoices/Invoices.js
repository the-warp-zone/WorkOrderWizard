import React, { Component } from 'react'
import InvoicesData from './InvoicesData'

const API_ENDPOINT_BASEURL = process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost';
const PORT = process.env.REACT_APP_API_PORT || '';
const pageEndpoint = '/api/invoice/all';
let url;

if (PORT) url = API_ENDPOINT_BASEURL + ":" + PORT + pageEndpoint;
else url = API_ENDPOINT_BASEURL + pageEndpoint;
console.log(url);

class Invoices extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
		
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }
    render() {
        return <InvoicesData data={this.state.data} />
    }
}

export default Invoices
