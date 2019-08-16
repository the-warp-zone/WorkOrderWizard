import React, { Component } from 'react'
import IndividualWorkOrderData from './IndividualWorkOrderData'

const API_ENDPOINT_BASEURL = process.env.REACT_APP_API_ENDPOINT_BASEURL || 'http://localhost';
const PORT = process.env.REACT_APP_API_PORT || '';
const pageEndpoint = '/api/workorder/';
let url;

if (PORT) url = API_ENDPOINT_BASEURL + ":" + PORT + pageEndpoint;
else url = API_ENDPOINT_BASEURL + pageEndpoint;
console.log(url);

class WorkOrder extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const workOrderName = this.props.match.params._id
        console.log(this.props.match.params._id)

        // console.log('fetching:\t' + url)
        //var res = await axios.get(url)

        fetch(url + workOrderName)
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
