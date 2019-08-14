import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './LP_Jumbotron.css';
import SignInModal from './SignInModal.js';

import '../../../App.css';

<<<<<<< HEAD
const LpJumbotron = props => (
  <div>
    <Jumbotron>
      <SignInModal show={props.show} close={props.close} />
      <div id="text">
        <h1>Work Order Wizard</h1>
        <p>Doing the Magic for You</p>
      </div>
    </Jumbotron>
  </div>
);
=======
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
>>>>>>> e0574fdb1f8ec02c3cc350b1265ba8b378f08b0c

export default LpJumbotron;
