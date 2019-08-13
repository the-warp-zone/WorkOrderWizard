import React, { Component } from 'react'
import CustomerForm from './DataForms/CustomerForm'
import Modal from 'react-bootstrap/Modal'

class SubmitForm extends Component {
    state = {
        form: '',
    }
    componentDidMount() {
        this.setState({
            form: this.props.dataType,
        })
    }

    render() {
        console.log('Form: ' + this.state.form)

        let formData
        if (this.state.form === 'customer')
            formData = <CustomerForm data={this.props} />
        // if (this.state.form === 'workorder') formData = <WorkOrderForm />
        // if (this.state.form === 'invoice') formData = <InvoiceForm />
        // if (this.state.form === 'cost') formData = <CostForm />
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.hide}
                dialogClassName="modal-90w"
                aria-labelledby=""
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.submitType}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{formData}</Modal.Body>
            </Modal>
        )
    }
}

export default SubmitForm
