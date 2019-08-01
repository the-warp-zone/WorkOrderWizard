import React from 'react'
import { shallow } from 'enzyme'
import LandingPage from './LandingPage'
import LP_Jumbotron from './Jumbotron/LP_Jumbotron'
import LpNav from './navbar/LpNav'

describe('Landing Page', () => {
    let wrapper
    beforeEach(() => (wrapper = shallow(<LandingPage />)))
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })

    it('should render the LP_Nav Component', () => {
        expect(wrapper.containsMatchingElement(<LpNav />)).toEqual(true)
    })

    it('should render the LP_Jumbotron Component', () => {
        expect(wrapper.containsMatchingElement(<LP_Jumbotron />)).toEqual(true)
    })
})
