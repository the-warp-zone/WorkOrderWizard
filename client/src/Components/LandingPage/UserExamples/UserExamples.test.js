import React from 'react'
import { shallow } from 'enzyme'
import UserExamples from './UserExamples'

describe('User Examples', () => {
    let wrapper
    beforeEach(() => (wrapper = shallow(<UserExamples />)))
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })
    it('should say User Examples', () => {
        expect(wrapper.find('.header').text()).toEqual('User Examples')
    })
    it('should contain a <img />', () => {
        expect(wrapper.find('img').length).toEqual(3)
    })
})
