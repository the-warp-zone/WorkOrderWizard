import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { withFirebase } from '../Firebase'
import ROUTES from '../../../Constants/routes'
import '../index.css'

const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>
)

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    error: null,
}

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use'

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`

class SignUpFormBase extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE }
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state
        const roles = {}

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase.user(authUser.user.uid).set({
                    username,
                    email,
                })
            })
            .then(() => {
                return this.props.firebase.doSendEmailVerification()
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE })
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS
                }

                this.setState({ error })
            })

        event.preventDefault()
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked })
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            isAdmin,
            error,
        } = this.state

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === ''

        return (
            <form onSubmit={this.onSubmit}>
			<div className="row">
			<div className="col">
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder=" Your Name"
                />
			</div>
			</div>
			<div className="row">
			<div className="col">
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder=" Email Address"
                />
			</div>
			</div>
			<div className="row">
			<div className="col">
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder=" Password"
                />
			</div>
			</div>
			<div className="row">
			<div className="col">
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder=" Confirm Password"
                />
			</div>
			</div>
			<div className="row">
			<div className="col">
                <button className="signupButton btn btn-success" disabled={isInvalid} type="submit">Sign Up</button>
			</div>
			</div>
			<div className="row">
			<div className="col">
                {error && <p>{error.message}</p>}
			</div>
			</div>
            </form>
        )
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
)

const SignUpForm = compose(
    withRouter,
    withFirebase
)(SignUpFormBase)

export default SignUpPage

export { SignUpForm, SignUpLink }
