import React, { Component } from 'react'
import IndividualCustomerData from './IndividualCustomerData'

const API_ENDPOINT_BASEURL = process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost';
const PORT = process.env.REACT_APP_API_PORT || '';
const pageEndpoint = '/api/customer/';
let url;

if (PORT) url = API_ENDPOINT_BASEURL + ":" + PORT + pageEndpoint;
else url = API_ENDPOINT_BASEURL + pageEndpoint;
console.log(url);

class Customer extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const customerName = this.props.match.params._id
        console.log(this.props.match.params._id)

        const url = API_ENDPOINT_BASEURL + PORT + pageEndpoint + customerName

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }
    submit() {}
    render() {
        return <IndividualCustomerData data={this.state.data} />
    }
}

export default Customer
