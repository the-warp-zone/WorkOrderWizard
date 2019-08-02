import React from 'react'
import { shallow } from 'enzyme'
import LandingPage from './LandingPage'
import LP_Jumbotron from './Jumbotron/LP_Jumbotron'
import LpNav from './navbar/LpNav'
import Testimonials from './Testimonials/Testimonials'
import Features from './Features/Features'
import UserExamples from './UserExamples/UserExamples'
import CallToAction from './CallToAction/CallToAction'

describe('Landing Page', () => {
    let wrapper
    beforeEach(() => (wrapper = shallow(<LandingPage />)))
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })

    it('should render the LP_Jumbotron Component', () => {
        expect(wrapper.containsMatchingElement(<LP_Jumbotron />)).toEqual(true)
    })
    it('should render the Testimonials Component', () => {
        expect(wrapper.containsMatchingElement(<Testimonials />)).toEqual(true)
    })
    it('should render the Features Component', () => {
        expect(wrapper.containsMatchingElement(<Features />)).toEqual(true)
    })
    it('should render the User Examples Component', () => {
        expect(wrapper.containsMatchingElement(<UserExamples />)).toEqual(true)
    })
    it('should render the CalltoAction Component', () => {
        expect(wrapper.containsMatchingElement(<CallToAction />)).toEqual(true)
    })
})
