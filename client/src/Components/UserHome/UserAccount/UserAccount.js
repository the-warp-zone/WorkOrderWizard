import React from 'react'
import Button from 'react-bootstrap/Button'

const UserAccount = () => {
    //
    return (
        <div>
            <h1>User Account</h1>
            <div>
                <h2>Account Info</h2>
                <ul>
                    <li>
                        <h3>Username</h3>
                    </li>
                    <li>
                        <h3>Name</h3>
                    </li>
                    <li>
                        <h3>Company Name</h3>
                    </li>
                    <li>
                        <Button>Edit</Button>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Payment Methods / Billing</h2>
                <Button>+ Add</Button>
                <h4>Existing Payment Methods</h4>
                <ul>
                    <li>
                        <p>****-****-****-1234</p>
                        <span>VISA</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserAccount
