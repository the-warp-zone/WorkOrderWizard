import React, { Component } from 'react'
import IndividualInvoiceData from './IndividualInvoiceData'

const API_ENDPOINT_BASEURL = process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost';
const PORT = process.env.REACT_APP_API_PORT || '';
const pageEndpoint = '/api/invoice/';
let url;

if (PORT) url = API_ENDPOINT_BASEURL + ":" + PORT + pageEndpoint;
else url = API_ENDPOINT_BASEURL + pageEndpoint;
console.log(url);

class Invoice extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const invoiceName = this.props.match.params._id
        console.log(this.props.match.params._id)

        fetch(url + invoiceName)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }
    render() {
        return <IndividualInvoiceData data={this.state.data} />
    }
}

export default Invoice
