import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Dog.css';
//import { showToggler } from "../HelperFunctions"

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <Link exact to={`/dogs/${this.props.data.name}`}>
          <img alt={this.props.data.name} src={this.props.data.src} />
          <h1>{this.props.data.name}</h1>
        </Link>

      </div>
    )
  }
}

export default Dog;