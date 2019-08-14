import React, { Component } from 'react'
import IndividualCostData from './IndividualCostData'

const API_ENDPOINT_BASEURL = process.env.API_ENDPOINT_BASEURL || 'http://localhost:';
const PORT = process.env.API_PORT || 3001;
const pageEndpoint = '/cost/';

class Cost extends Component {
    state = {
        data: [],
        cost: '',
    }

    componentDidMount() {
        const costName = this.props.match.params._id
        console.log(this.props.match.params._id)
		
		fetch(API_ENDPOINT_BASEURL + PORT + pageEndpoint + costName)
            .then(response => response.json())
            .then(data => this.setState({ data: data, cost: costName }))
    }
    render() {
        return <IndividualCostData data={this.state.data} />
    }
}
export default Cost
