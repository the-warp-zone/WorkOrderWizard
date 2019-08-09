import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Searchbar from './Searchbar/Searchbar'
import PageCards from './PageCards/PageCards'
import routes from '../../Constants/routes'
import Customers from './PageCards/Customers/Customers'

var UserHome = () => {
    return (
        <div>
            <Searchbar />
            <PageCards />
            <Route
                className="routes"
                exact
                path={routes.CUSTOMERS}
                component={Customers}
            />
        </div>
    )
}

export default UserHome
