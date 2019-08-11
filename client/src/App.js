import React from 'react'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import MainNav from './Components/MainNav/MainNav'
import UserHome from './Components/UserHome/UserHome'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './Constants/routes.js'
import Customers from './Components/UserHome/PageCards/Customers/Customers'
import WorkOrders from './Components/UserHome/PageCards/WorkOrders/WorkOrders'
import Customer from './Components/UserHome/PageCards/Customers/Customer/Customer'
import WorkOrder from './Components/UserHome/PageCards/WorkOrders/WorkOrder/WorkOrder'
import Invoices from './Components/UserHome/PageCards/Invoices/Invoices'
import Invoice from './Components/UserHome/PageCards/Invoices/Invoice/Invoice'
import Costs from './Components/UserHome/PageCards/Costs/Costs'
import Cost from './Components/UserHome/PageCards/Costs/Cost/Cost.js'
import UserAccount from './Components/UserHome/UserAccount/UserAccount'

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
                    <Route
                        path={Routes.CUSTOMER + '/:_id'}
                        component={Customer}
                    />
                    <Route path={Routes.WORK_ORDERS} component={WorkOrders} />
                    <Route
                        path={Routes.WORK_ORDER + '/:_id'}
                        component={WorkOrder}
                    />
                    <Route path={Routes.INVOICES} component={Invoices} />
                    <Route
                        path={Routes.INVOICE + '/:_id'}
                        component={Invoice}
                    />
                    <Route path={Routes.COSTS} component={Costs} />
                    <Route path={Routes.COST + '/:_id'} component={Cost} />
                    <Route path={Routes.ACCOUNT} component={UserAccount} />
                </Route>
                {/* <Route
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
                /> */}
            </div>
        </Router>
    )
}

export default App
