import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CustomerRow from './CustomerRow'
import axios from 'axios'

class Customers extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const url = 'http://localhost:3001/customer/all'
        // console.log('fetching:\t' + url)
        //var res = await axios.get(url)

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
        //console.log(res)
        //this.setState({ data: res.data })
    }
    render() {
        return <CustomerRow data={this.state.data} />
    }
}

export default Customers
