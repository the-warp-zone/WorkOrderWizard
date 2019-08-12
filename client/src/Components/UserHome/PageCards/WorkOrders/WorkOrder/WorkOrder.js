import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import IndividualWorkOrderData from './IndividualWorkOrderData'

class WorkOrder extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const workOrderName = this.props.match.params._id
        console.log(this.props.match.params._id)

        const url = 'http://localhost:3001/workorder/' + workOrderName
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
