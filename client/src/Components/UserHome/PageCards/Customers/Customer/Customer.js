import React, { Component } from 'react'
import IndividualCustomerData from './IndividualCustomerData'

class Customer extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const customerName = this.props.match.params._id
        console.log(this.props.match.params._id)

        const url = 'http://localhost:3001/customer/' + customerName
        // console.log('fetching:\t' + url)
        //var res = await axios.get(url)

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
        //console.log(res)
        //this.setState({ data: res.data })
    }
    submit() {}
    render() {
        return <IndividualCustomerData data={this.state.data} />
    }
}

export default Customer
