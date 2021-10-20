import React from "react"
import { Route, Switch, Link, NavLink } from "react-router-dom";
import './styles/App.css';
import Navbar from './components/Navbar';
import Dogs from './components/Dogs';
import Dog from './components/Dog';

import whiskey from "./dogImgs/whiskey.jpg"
import hazel from "./dogImgs/hazel.jpg"
import tubby from "./dogImgs/tubby.jpg"


class App extends React.Component  {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }


  render() {
  return (
    <div className="App">
      <Navbar />
      {/*<p>{this.props.dogs[0].name}</p>
<img src={this.props.dogs[0].src}/>*/}


      <Switch>
        <Route exact path="/" render={() => <Dogs data={this.props.dogs} />} />
        {/*<Route exact path="/food/:name" render={(routeProps) => < Food text="You ordered" {...routeProps} />} /> */}
        <Route exact path="/dog" render={() => < Dog />} />


      </Switch>
    </div>
  );
  }
}

export default App;
