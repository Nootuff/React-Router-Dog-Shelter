import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import View from './View';
//import '../styles/ToDo.css';
//import { showToggler } from "../HelperFunctions"

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    //this.done = this.done.bind(this);
  }

  render() {

    return (
      <div>
        <Link exact to={`/view/${this.props.data.name}`}>
          <img alt={this.props.data.name} src={this.props.data.src} />
          <h1>{this.props.data.name}</h1>
        </Link>

      </div>
    )
  }
}

export default Dog;