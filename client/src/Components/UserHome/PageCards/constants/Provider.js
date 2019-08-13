import Context from './Context'

class Provider extends Component {
    state = {
        customerData: [],
        invoiceData: [],
        workOrderData: [],
        costData: [],
    }

    render() {
        return (
            <Context.Provider
                value={{
                    customerData: this.state.customerData,
                    workOrderData: this.state.workOrderData,
                    invoiceData: this.state.invoiceData,
                    costData: this.state.costData,
                }}
            >
                {this.props.children}
            </Context.Provider>
        )
    }
}
