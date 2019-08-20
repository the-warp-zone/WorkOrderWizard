import React, { Component } from 'react'
import IndividualCustomerData from './IndividualCustomerData'
import { withAuthorization } from '../../../../Auth/Session'

const API_ENDPOINT_BASEURL =
    process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost'
const PORT = process.env.REACT_APP_API_PORT || ''
const pageEndpoint = '/api/customer/'
let url

if (PORT) url = API_ENDPOINT_BASEURL + ':' + PORT + pageEndpoint
else url = API_ENDPOINT_BASEURL + pageEndpoint
console.log(url)

class Customer extends Component {
    state = {
        show: false,
        data: [],
    }
    componentDidMount() {
        const customerName = this.props.match.params._id
        fetch(url + customerName)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }
    // componentDidUpdate() {
    //     const customerName = this.props.match.params._id
    //     fetch(url + customerName)
    //         .then(response => response.json())
    //         .then(data => this.setState({ data: data }))
    // }

    render() {
        return <IndividualCustomerData data={this.state.data} />
    }
}

const condition = authUser => !!authUser
export default withAuthorization(condition)(Customer)
