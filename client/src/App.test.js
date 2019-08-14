import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})

describe('App', () => {
    let wrapper
    beforeEach(() => (wrapper = shallow(<App />)))
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })

    it('should render the Routes Component', () => {
        expect(wrapper.find('.routes').length).toEqual(2)
    })
})
