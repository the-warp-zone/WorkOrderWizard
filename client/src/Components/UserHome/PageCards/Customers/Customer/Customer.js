import React, { Component } from 'react'
import IndividualCustomerData from './IndividualCustomerData'

const API_ENDPOINT_BASEURL = process.env.API_ENDPOINT_BASEURL || 'http://localhost:';
const PORT = process.env.API_PORT || 3001;
const pageEndpoint = '/customer/';

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
