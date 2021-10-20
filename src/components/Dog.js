import React, { Component } from "react";
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
          <a href=""><img alt={this.props.name} src={this.props.img} /></a>
      <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default Dog;