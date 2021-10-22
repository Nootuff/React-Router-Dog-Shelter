import React, { Component } from "react";
//import '../styles/ToDo.css';
//import { showToggler } from "../HelperFunctions"

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    
    //this.done = this.done.bind(this);
  }
  
  render() {
    const name = this.props.match.params.name;
    return (
      <div>
         <h1>{name}</h1>
      </div>
    )
  }
}

export default View;