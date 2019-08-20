import React from 'react'
import Searchbar from './Searchbar/Searchbar'
import PageCards from './PageCards/PageCards'
import './UserHome.css'
import { withAuthorization } from '../Auth/Session'

const UserHome = () => (
    <div id="background">
        {/* <Searchbar /> */}
        <PageCards />
    </div>
)
const condition = authUser => !!authUser

export default withAuthorization(condition)(UserHome)
