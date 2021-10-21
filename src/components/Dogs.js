import React, { Component } from "react";
import Dog from "./Dog";
//import { showToggler } from "../HelperFunctions"

class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    
    //this.done = this.done.bind(this);
  }
  
  render() {
    
const  allDogs = this.props.data.map(value => <Dog data={value} />  )

    return (
      <div>
      <h1>Click a dog to learn more!</h1>
      {allDogs}
      </div>
    )
  }
}

export default Dogs;