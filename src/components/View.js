import React, { Component } from "react";
import '../styles/View.css';
import Navbar from './Navbar';
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
    let imgHolder;
    let ageHolder;
    let factsHolder;

    //console.log(this.props.data.dogs)

    for (let i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i].name.toLowerCase() == name.toLowerCase()) {
        ageHolder = this.props.data[i].age;
        imgHolder = this.props.data[i].src;
        factsHolder = this.props.data[i].facts
      }
    }
    return (
      <div className="View">
        <img alt={this.props.data.name} src={imgHolder} />
        <h1>Hi my name is {name}!</h1>
        <p>I'm {ageHolder} years old!</p>
        <h2>Here's a few facts about me!</h2>
        <ul>
          {factsHolder.map(value => <li>{value}</li>)}
        </ul>

      </div>
    )
  }
}

export default View;