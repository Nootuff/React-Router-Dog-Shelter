import React, { Component } from "react";
import '../styles/Welcome.css';
//import { showToggler } from "../HelperFunctions"
import { Link } from "react-router-dom";

class Welcome extends Component {
  
  render() {
    
    return (
      <div className="Welcome">
        <Link exact to="/dogs" ><h1>Take me to the dogs!</h1> </Link>
      </div>
    )
  }
}

export default Welcome;