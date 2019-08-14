import React, { Component } from 'react'
import CostsData from './CostsData'

const API_ENDPOINT_BASEURL = process.env.API_ENDPOINT_BASEURL || 'http://localhost:';
const PORT = process.env.API_PORT || 3001;
const pageEndpoint = '/cost/all';

class Costs extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        
        fetch(API_ENDPOINT_BASEURL + PORT + pageEndpoint)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }
    render() {
        return <CostsData data={this.state.data} />
    }
}

export default Costs
