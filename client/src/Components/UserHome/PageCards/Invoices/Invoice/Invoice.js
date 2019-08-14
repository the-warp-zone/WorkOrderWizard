import React, { Component } from 'react'
import IndividualInvoiceData from './IndividualInvoiceData'

const API_ENDPOINT_BASEURL = process.env.API_ENDPOINT_BASEURL || 'http://localhost:';
const PORT = process.env.API_PORT || 3001;
const pageEndpoint = '/invoice/';

class Invoice extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const invoiceName = this.props.match.params._id
        console.log(this.props.match.params._id)

        const url = API_ENDPOINT_BASEURL + PORT + pageEndpoint + invoiceName

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }
    render() {
        return <IndividualInvoiceData data={this.state.data} />
    }
}

export default Invoice
