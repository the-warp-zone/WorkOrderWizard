import React from 'react'
import { shallow } from 'enzyme'
import CallToAction from './CallToAction'

describe('Features', () => {
    let wrapper
    beforeEach(() => (wrapper = shallow(<CallToAction />)))
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })
    it('should say Get Work Order Wizard Today', () => {
        expect(wrapper.find('.Action').text()).toEqual(
            'Get Work Order Wizard Today'
        )
    })
    it('should contain a button', () => {
        expect(wrapper.find('Button').length).toEqual(1)
    })
    it('should contain a Submit Button that says: Sign Up Now', () => {
        expect(wrapper.find('Button').text()).toEqual('Sign Up Now')
    }) //
})
