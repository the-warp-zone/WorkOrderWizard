<<<<<<< HEAD
import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
=======
import React from "react";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <WorkOrderWizard /> */}
    </div>
  );
>>>>>>> ce5bfbe3d4c0e98e2e8cbdf210000cb1b7cf90a6
}

export default App
