import React, { Component } from 'react'
import IndividualCostData from './IndividualCostData'

class Cost extends Component {
    state = {
        data: [],
        cost: '',
    }

    componentDidMount() {
        const costName = this.props.match.params._id
        console.log(this.props.match.params._id)

        const url = 'http://localhost:3001/cost/' + costName
        // console.log('fetching:\t' + url)
        //var res = await axios.get(url)

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data, cost: costName }))
        //console.log(res)
        //this.setState({ data: res.data })
    }
    render() {
        return <IndividualCostData data={this.state.data} />
    }
}
export default Cost
