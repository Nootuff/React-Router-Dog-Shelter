import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Dog.css';

class Dog extends Component {
  render() {
    return (
      <div className="Dog" key={this.props.name}>
        <Link exact to={`/${this.props.name}`}>
          <img alt={this.props.name} src={this.props.src} />
          <h1>{this.props.name}</h1>
        </Link>
      </div>
    )
  }
}

export default Dog;