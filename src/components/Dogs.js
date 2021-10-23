import React, { Component } from "react";
import Dog from "./Dog";
//import '../styles/Dogs.css';

class Dogs extends Component {
  render() {
    const allDogs = this.props.data.map(value => <Dog data={value} />)
    return (
      <div className="Dogs">
        <h1>Click a dog to learn more!</h1>
        {allDogs}
      </div>
    )
  }
}

export default Dogs;