import React from 'react'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import MainNav from './Components/MainNav/MainNav'
import UserHome from './Components/UserHome/UserHome'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './Constants/routes.js'
import SignUp from './Components/Auth/signup'
import SignIn from './Components/Auth/signin'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import useState from 'react'

const [show, setShow] = useState(false)
const handleClose = () => setShow(false)
const handleShow = () => setShow(true)

function loginModal() {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

function App() {
    return (
        <Router>
            <div className="App">
                <MainNav handleShow={handleShow} />
                <Route
                    className="routes"
                    exact
                    path={Routes.LANDING}
                    component={LandingPage}
                    modal={loginModal}
                />
                {/* After user is past landing page or loggin in... */}
                <Route
                    className="routes"
                    exact
                    path={Routes.HOME}
                    component={UserHome}
                />
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
