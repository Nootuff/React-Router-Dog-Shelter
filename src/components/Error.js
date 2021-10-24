import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    
    return (
      <div className="Error">
        <h1>No Dog Found</h1>
        <Link exact to="/" ><h1>Take me back to the dogs!</h1> </Link>
      </div>
    )
  }
}

export default Error;