import React from 'react'
import { shallow } from 'enzyme'
import Testimonials from './Testimonials'

describe('Testimonials', () => {
    let wrapper
    beforeEach(() => (wrapper = shallow(<Testimonials />)))
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })
    // it('should say Customer Testimonials', () => {
    //     expect(
    //         wrapper.find('.testimonials').text.toEqual('Customer Testimonials')
    //     )
    // })
})
