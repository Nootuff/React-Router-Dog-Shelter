import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../styles/View.css';

class View extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  render() {
    let dogData = this.props.data; //Holds all the props that were passed in. 
    return (
      <div className="View">
        <img alt={dogData.name} src={dogData.src} />
         <h2 className="">Hi my name is {dogData.name}!</h2>
         <p>I'm {dogData.age} years old!</p>
          <h2>Here's a few facts about me!</h2>
          <ul>
            {dogData.facts.map(value => <li>{value}</li>)}
          </ul>
  <button className="btn btn-info" onClick={this.handleBack}>Go Back</button>
      </div>
    )
  }

  /* My version
    render() {
      const name = this.props.match.params.name;
      let imgHolder;
      let ageHolder;
      let factsHolder;
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
          <h1 className="display-1">Hi my name is {name}!</h1>
          <p>I'm {ageHolder} years old!</p>
          <h2>Here's a few facts about me!</h2>
          <ul>
            {factsHolder.map(value => <li>{value}</li>)}
          </ul>
  <button onClick={this.handleBack}>Go Back</button>
        </div>
      )
    }
    */
}

export default withRouter(View);