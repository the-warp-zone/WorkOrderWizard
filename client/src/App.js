import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import MainNav from './Components/MainNav/MainNav'
import UserHome from './Components/UserHome/UserHome'
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
//import Account from './Components/Auth/Account'
import { withFirebase } from './Components/Auth/'
import { AuthUserContext } from './Components/Auth/Session'
import SignUp from './Components/Auth/signup'
import SignIn from './Components/LandingPage/Jumbotron/SignInModal'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            authUser: null,
        }
    }
    handleClose = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null })
            }
        )
    }

    componentWillUnmount() {
        this.listener()
    }

    render() {
        console.log(this.state.authUser)
        return (
            <Router>
                <div className="App">
                    <MainNav
                        handleShow={this.handleShow}
                        auth={this.state.authUser}
                    />
                    <Route
                        className="routes"
                        exact
                        path={Routes.LANDING}
                        render={() => (
                            <LandingPage
                                data={this.state.show}
                                close={this.handleClose}
                            />
                        )}
                    />
                    {/* After user is past landing page or loggin in... */}
                    <Route
                        className="routes"
                        exact
                        path={Routes.HOME}
                        component={UserHome}
                    />
                    <Route path={Routes.CUSTOMERS} component={Customers} />
                    <Route
                        path={`${Routes.CUSTOMER}/:_id`}
                        component={Customer}
                    />
                    <Route path={Routes.WORK_ORDERS} component={WorkOrders} />
                    <Route
                        path={`${Routes.WORK_ORDER}/:_id`}
                        component={WorkOrder}
                    />
                    <Route path={Routes.INVOICES} component={Invoices} />
                    <Route
                        path={`${Routes.INVOICE}/:_id`}
                        component={Invoice}
                    />
                    <Route path={Routes.COSTS} component={Costs} />
                    <Route path={`${Routes.COST}/:_id`} component={Cost} />
                    <Route path={Routes.ACCOUNT} component={UserAccount} />
                    {/* </Route> */}
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
}

export default withFirebase(App)
