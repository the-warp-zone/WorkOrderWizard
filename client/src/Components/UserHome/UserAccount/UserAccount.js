import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './UserAccount.css';

const UserAccount = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: .5
            }}
        />
    );
    return (
        <React.Fragment>
        <div className="row">
            <div className="col">
                <h1>User Account</h1>
            </div> 
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-3">
                <Card>
                    <p className="card-text">(Username)</p>
                </Card>
            </div>  
            <div className="col-sm-12 col-md-3">
                <Card>
                    <p className="card-text">(Name)</p>
                </Card>
            </div>
            <div className="col-sm-12 col-md-3">
                <Card>
                    <p className="card-text">(Company Name)</p>
                </Card>
            </div>
            <div className="col-sm-12 col-md-3">
                <Button>Edit</Button>
            </div>
        </div>
        <ColoredLine color="rgb(216, 216, 216)" />
        <div className="row">
            <div className="col">
                <h1>Billing</h1>
            </div> 
        </div>
        <div className="row">
            <div className="col">
                <Button>Add Payment Method</Button>
            </div>
        </div>
        <div className="row">
            <h5 style={{marginLeft: '15px' }}>Your Payment Methods</h5>
        </div>
        <div className="row">
            <div style={{ width: '400px' }}>
                <ol>
                    <li>
                        <p>(****-****-****-1234)<span>(VISA)</span></p>
                    </li>
                </ol>  
            </div>
        
        </div>
        </React.Fragment>
       
    )
}

export default UserAccount
