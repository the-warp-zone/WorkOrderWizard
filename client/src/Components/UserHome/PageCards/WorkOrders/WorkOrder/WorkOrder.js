import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import IndividualWorkOrderData from './IndividualWorkOrderData'

const API_ENDPOINT_BASEURL = process.env.API_ENDPOINT_BASEURL || 'http://localhost:';
const PORT = process.env.API_PORT || 3001;
const pageEndpoint = '/workorder/';

class WorkOrder extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const workOrderName = this.props.match.params._id
        console.log(this.props.match.params._id)

        const url = API_ENDPOINT_BASEURL + PORT + pageEndpoint + workOrderName
        // console.log('fetching:\t' + url)
        //var res = await axios.get(url)

        fetch(url)
            .then(response => response.json())
            .then(data =>
                this.setState({ data: data, WorkOrder: workOrderName })
            )
        //console.log(res)
        //this.setState({ data: res.data })
    }
    render() {
        return <IndividualWorkOrderData data={this.state.data} />
    }
}

export default WorkOrder
