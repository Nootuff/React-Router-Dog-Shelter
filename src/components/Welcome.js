import React, { Component } from "react";
import '../styles/Welcome.css';
//import { showToggler } from "../HelperFunctions"
import { Link } from "react-router-dom";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    //this.done = this.done.bind(this);
  }

  render() {
    
    return (
      <div className="Welcome">
        <Link exact to="/dogs" ><h1>Take me to the dogs!</h1> </Link>
      </div>
    )
  }
}

export default Welcome;