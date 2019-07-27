import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'
import LandingPage from './Components/LandingPage/LandingPage'

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

    it('should render the LandingPage Component', () => {
        expect(wrapper.containsMatchingElement(<LandingPage />)).toEqual(true)
    })
})
