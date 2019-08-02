import React from 'react'
import { shallow } from 'enzyme'
import LP_Jumbotron from './LP_Jumbotron'

describe('Jumbotron', () => {
    let wrapper
    beforeEach(() => (wrapper = shallow(<LP_Jumbotron />)))
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })

    it('should say Work Order Wizard', () => {
        expect(wrapper.find('h1').text()).toEqual('Work Order Wizard')
    })
})
