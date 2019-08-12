import React, { Component } from 'react'
import WorkOrdersData from './WorkOrdersData'

class WorkOrders extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const url = 'http://localhost:3001/workorder/all'
        // console.log('fetching:\t' + url)
        //var res = await axios.get(url)

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
        //console.log(res)
        //this.setState({ data: res.data })
    }
    render() {
        return <WorkOrdersData data={this.state.data} />
    }
}

export default WorkOrders
