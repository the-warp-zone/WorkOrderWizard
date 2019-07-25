import React from "react";
import "../App.css";
import LpNav from "./navbar/LpNav";
import LP_Jumbotron from './Jumbotron/LP_Jumbotron';

var LandingPage = () => {
  return (
    <div className="LandingPage">
      <LpNav/>
      <LP_Jumbotron />
      {/* Features */}
      {/* Stories */}
      {/* Call to Action */}
    </div>
  );
};

export default LandingPage;
