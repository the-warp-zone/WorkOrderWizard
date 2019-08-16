import React from 'react'
import LpJumbotron from './Jumbotron/LP_Jumbotron'
import Testimonials from './Testimonials/Testimonials'
import Features from './Features/Features'
import UserExamples from './UserExamples/UserExamples'
import CallToAction from './CallToAction/CallToAction'
import './LandingPage.css';

var LandingPage = props => {
    return (
        <div className="LandingPage">
            <LpJumbotron show={props.data} close={props.close} />
            <Testimonials />
            <Features />
            <UserExamples />
            <CallToAction />
        </div>
    )
}

export default LandingPage
