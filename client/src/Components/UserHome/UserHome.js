import React from 'react'
import Searchbar from './Searchbar/Searchbar'
import PageCards from './PageCards/PageCards'
import './UserHome.css'

var UserHome = () => {
    return (
        <div id="background">
            <Searchbar />
            <PageCards />
        </div>
    )
}

export default UserHome
