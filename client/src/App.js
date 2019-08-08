import React from 'react'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import MainNav from './Components/MainNav/MainNav'
import UserHome from './Components/UserHome/UserHome'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './Constants/routes.js'
function App() {
    return (
        <Router>
            <div className="App">
                <MainNav />
                <Route
                    className="routes"
                    exact
                    path={Routes.LANDING}
                    component={LandingPage}
                />
                {/* After user is past landing page or loggin in... */}
                <Route
                    className="routes"
                    exact
                    path={Routes.HOME}
                    component={UserHome}
                />
            </div>
        </Router>
    )
}

export default App
