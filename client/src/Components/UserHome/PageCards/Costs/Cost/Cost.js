import React, { Component } from 'react'
import IndividualCostData from './IndividualCostData'
import { withAuthorization } from '../../../../Auth/Session'

const API_ENDPOINT_BASEURL = process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost'
const PORT = process.env.REACT_APP_API_PORT || ''
const pageEndpoint = '/api/cost/'
let url

if (PORT) url = API_ENDPOINT_BASEURL + ':' + PORT + pageEndpoint
else url = API_ENDPOINT_BASEURL + pageEndpoint
console.log(url)

class Cost extends Component {
    state = {
        data: [],
        cost: '',
    }

    componentDidMount() {
        const costName = this.props.match.params._id
        console.log(this.props.match.params._id)

        fetch(url + costName)
            .then(response => response.json())
            .then(data => this.setState({ data: data, cost: costName }))
    }
    render() {
        return <IndividualCostData data={this.state.data} />
    }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Cost)
