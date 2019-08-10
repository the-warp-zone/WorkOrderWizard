import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withFirebase } from '../../../Constants/Firebase/'
import * as ROUTES from '../../../Constants/routes'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

// const SignInModal = props => {
    return (
        <Modal
            show={props.show}
            onHide={props.close}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sign In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4></h4>
                <p>
                  <div class="RML-social-modal-content-wrap">
                      <div class="RML-login-modal-form">
                          <div class="RML-form-group">
                              <label for="form-login">Nickname</label>
                                <input type="text" class="RML-form-control" id="form-login" name="login" placeholder="Nickname" value=""/>
                        </div>
                        <div class="RML-form-group">
                            <label for="form-email">Email</label>
                            <input type="email" class="RML-form-control" id="form-email" name="email" placeholder="Email" value=""/>
                        </div>
                        <div class="RML-form-group">
                            <label for="form-password">Password</label>
                                <input type="password" class="RML-form-control" id="form-password" name="password" placeholder="Password" value=""/>
                                </div>
                        <button class="RML-btn" id="registerSubmit">Sign In</button>
                        <div class="clearfix">
                            </div>
                            </div>
                            </div>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.close}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

// export default SignInModal
