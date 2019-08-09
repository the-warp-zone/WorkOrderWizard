import React from 'react'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import MainNav from './Components/MainNav/MainNav'
import UserHome from './Components/UserHome/UserHome'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './Constants/routes.js'
import SignUp from './Components/Auth/signup'
import SignIn from './Components/Auth/signin'
import Customers from './Components/UserHome/PageCards/Customers/Customers'

function App() {
    const [show, setShow] = React.useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Router>
            <div className="App">
                <MainNav handleShow={handleShow} />
                <Route
                    className="routes"
                    exact
                    path={Routes.LANDING}
                    render={() => (
                        <LandingPage data={show} close={handleClose} />
                    )}
                />
                {/* After user is past landing page or loggin in... */}
                <Route
                    className="routes"
                    exact
                    path={Routes.HOME}
                    component={UserHome}
                >
                    <Route path={Routes.CUSTOMERS} component={Customers} />
                </Route>
                <Route
                    className="routes"
                    exact
                    path={Routes.SIGN_UP}
                    component={SignUp}
                />
                <Route
                    className="routes"
                    exact
                    path={Routes.SIGN_IN}
                    component={SignIn}
                />
            </div>
        </Router>
    )
}

export default App
