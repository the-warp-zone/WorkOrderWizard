import React, { Component } from 'react'
import CustomersData from './CustomersData'
//import axios from 'axios'

function checkNotDeleted(customer) {
		return customer.deleted !== true;
	}

class Customers extends Component {
    state = {
        data: [],
        posted: false,
        err: '',
    }
	
    componentDidMount() {
        const url = 'http://localhost:3001/customer/all'
        // console.log('fetching:\t' + url)
        //var res = await axios.get(url)

        fetch(url)
            .then(response => response.json())
	.then(data => {
		return this.setState({ data: data.filter(checkNotDeleted) });
	});
        //console.log(res)
        //this.setState({ data: res.data })
    }
    submit() {}
    // componentDidUpdate(){
    //     const url = 'http://localhost:3001/customer/all'

    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => this.setState({ data: data }))
    // }
    handleHide = () => {
        this.setState({ show: false })
    }
    render() {
        return <CustomersData data={this.state.data} />
    }
}

export default Customers
