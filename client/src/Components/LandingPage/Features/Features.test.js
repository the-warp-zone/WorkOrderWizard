import React from 'react'
import { shallow } from 'enzyme'
import Features from './Features'

describe('Features', () => {
    let wrapper
    beforeEach(() => (wrapper = shallow(<Features />)))
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })
    it('should contain a list of features', () => {
        expect(wrapper.find('li').length).toEqual(4)
    })
})
