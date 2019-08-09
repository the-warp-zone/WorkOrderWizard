import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './LP_Jumbotron.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import SignInModal from './SignInModal.js'

import '../../../App.css'

var LP_Jumbotron = props => {
    return (
        <div>
            <Jumbotron>
                <SignInModal show={props.show} close={props.close} />
                <div id="text">
                    <h1>Work Order Wizard</h1>
                    <p>Doing the Magic for You</p>
                </div>
            </Jumbotron>
        </div>
    )
}

export default LP_Jumbotron
