import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './LP_Jumbotron.css'
import SignInModal from './SignInModal.js'

import '../../../App.css'

var LpJumbotron = props => {
    return (
        <div>
            <Jumbotron>
                <SignInModal show={props.show} close={props.close} />
                <div id="text">
                    <h1 id="logoLP">Work Order Wizard</h1>
                    <h2>Doing the Magic for You</h2>
                </div>
            </Jumbotron>
        </div>
    )
}

export default LpJumbotron
