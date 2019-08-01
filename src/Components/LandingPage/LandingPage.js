import React from 'react'
import LpNav from './navbar/LpNav'
import LP_Jumbotron from './Jumbotron/LP_Jumbotron'
import Testimonials from './Testimonials/Testimonials'
import Features from './Features/Features'
import UserExamples from './UserExamples/UserExamples'
import CallToAction from './CallToAction/CallToAction'

var LandingPage = () => {
    return (
        <div className="LandingPage">
            {/* <LpNav/> */}
            <LP_Jumbotron />
            <Testimonials />
            <Features />
            <UserExamples />
            <CallToAction />
        </div>
    )
}

export default LandingPage
