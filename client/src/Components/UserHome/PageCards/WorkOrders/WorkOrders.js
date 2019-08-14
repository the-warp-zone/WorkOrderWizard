import React, { Component } from 'react'
import WorkOrdersData from './WorkOrdersData'

const API_ENDPOINT_BASEURL = process.env.API_ENDPOINT_BASEURL || 'http://localhost:';
const PORT = process.env.API_PORT || 3001;
const pageEndpoint = '/workorder/all';

class WorkOrders extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        
        fetch(API_ENDPOINT_BASEURL + PORT + pageEndpoint)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }
    render() {
        return <WorkOrdersData data={this.state.data} />
    }
}

export default WorkOrders
