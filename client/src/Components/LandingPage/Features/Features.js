import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './Features.css'
import '../../LandingPage/LandingPage.css';
import '../../../App.css';

var Features = () => {
    return (
        <div>
            <hr />
            <div>
                <div>
                    <h2>
                        <em className="col text-font div-title">Features</em>
                    </h2>
                </div>
            </div>
            <div>
                <div />
            </div>
            <div>

                <div>
                    <ul className="list text-font">
                        <li>This is a feature</li>
                        <li>This is also a feature</li>
                        <li>What is a feature?</li>
                        <li>This feature changed my life</li>
                        <li>This feature saved my marriage</li>
                        <li>
                            I broke into the natural history museum to steal
                            this feature
                        </li>
                    </ul>
                </div>

                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer eu nisi et leo imperdiet euismod. Nulla id volutpat
                    sem. Etiam non massa vitae leo laoreet sollicitudin
                    imperdiet nec tortor. In hac habitasse platea dictumst.
                    Mauris sapien orci, condimentum id lorem vitae, ultricies
                    egestas magna. Duis bibendum pulvinar velit vitae porttitor.
                </div>

                <div>
                    <img
                        src="https://via.placeholder.com/500x200.jpg"
                        alt="placeholder"
                    />
                </div>
            </div>


        </div>
    )
}

export default Features
