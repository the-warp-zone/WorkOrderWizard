import React, { Component } from 'react'
import CostsData from './CostsData'
import { withAuthorization } from '../../../Auth/Session'

const API_ENDPOINT_BASEURL = process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost'
const PORT = process.env.REACT_APP_API_PORT || ''
const pageEndpoint = '/api/cost/all'
let url

if (PORT) url = API_ENDPOINT_BASEURL + ':' + PORT + pageEndpoint
else url = API_ENDPOINT_BASEURL + pageEndpoint + process.env.REACT_APP_API_SECRET;
//console.log(url)

function checkNotDeleted(cost) {
    return cost.deleted !== true
}

class Costs extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data.filter(checkNotDeleted) }))
    }

    render() {
        return <CostsData data={this.state.data} />
    }
}
const condition = authUser => !!authUser

export default withAuthorization(condition)(Costs)
