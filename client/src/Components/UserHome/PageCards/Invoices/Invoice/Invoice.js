import React, { Component } from 'react'
import IndividualInvoiceData from './IndividualInvoiceData'

class Invoice extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const invoiceName = this.props.match.params._id
        console.log(this.props.match.params._id)

        const url = 'http://localhost:3001/invoice/' + invoiceName
        // console.log('fetching:\t' + url)
        //var res = await axios.get(url)

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
        //console.log(res)
        //this.setState({ data: res.data })
    }
    render() {
        return <IndividualInvoiceData data={this.state.data} />
    }
}

export default Invoice
