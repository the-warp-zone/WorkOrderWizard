import React from 'react'
import Button from 'react-bootstrap/Button'
import '../../../App.css'
import './CallToAction.css'
import { Link, withRouter } from 'react-router-dom'
import '../../LandingPage/LandingPage.css'
import Routes from '../../../Constants/routes'

var CallToAction = () => {
    return (
        <div id="calltoAction">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>
                            <em className="div-title">
                                Get Work Order Wizard Today
                            </em>
                        </h2>
                    </div>
                </div>
                <div className="row landing-background">
                    <div className="col">
                        <div className="text-font ctaText">
                            <p>
                                Now that we have shared with you the awesome
                                power of work order wizard, what better time to
                                sign up?
                            </p>
                            <Link to={Routes.SIGN_UP}>
                                <Button>Sign Up!</Button>
                            </Link>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
