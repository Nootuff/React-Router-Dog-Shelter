import React, { Component } from "react";
import Dog from "./Dog";

class Dogs extends Component {
  render() {
    const allDogs = this.props.data.map(value => <div className="col-lg-4 text-center"><Dog name={value.name} src={value.src} key={value.name}/></div>)
    return (
      <div className="Dogs">
        <h1 className="display-1">Click a dog to learn more!</h1>
        <div className="container">
        <div className="row">
          {allDogs}
          </div>
        </div>
      </div>
    )
  }
}

export default Dogs;