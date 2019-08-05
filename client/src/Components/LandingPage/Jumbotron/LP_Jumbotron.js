import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './LP_Jumbotron.css'

import '../../../App.css'

var LP_Jumbotron = () => {
    return (
        <div>
            <Jumbotron>
                <div id="text">
                    <h1>Work Order Wizard</h1>
                    <p>
                        This is going to be some text about what we do.. I
                        actually dont know.
                    </p>
                </div>
            </Jumbotron>
        </div>
    )
}

export default LP_Jumbotron
