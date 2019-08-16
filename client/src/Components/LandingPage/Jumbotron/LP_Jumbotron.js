import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './LP_Jumbotron.css'
import SignInModal from './SignInModal'
import '../../../App.css'

const LpJumbotron = () => (
    <div>
        <Jumbotron>
            <div id="text">
                <h1 id="logoLP">Work Order Wizard</h1>
                <h2>Doing the Magic for You</h2>
            </div>
        </Jumbotron>
    </div>
)

export default LpJumbotron
