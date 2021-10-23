import React from "react"
import { Route, Switch } from "react-router-dom";
import './styles/App.css';

import Dogs from './components/Dogs';
import View from './components/View';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


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
        age: 6,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }, 
      {
        name: "Brutus",
        age: 666,
        src: hazel,
        facts: [
          "Cannibalistic",
          "Brutus does not like light or hope.",
          "Knows the date and time of your death."
        ]
      }, 
    ]
  }


  render() {
  return (
    <div className="App ">
 
 <Navbar data={this.props.dogs} />
 

      <Switch> 
        <Route exact path="/" render={() => <Dogs data={this.props.dogs} />} />
        <Route exact path="/dogs" render={() => <h1>Dog list</h1>} />
       <Route exact path="/dogs/:name" render={(routeProps) => < View {...routeProps} data={this.props.dogs} />} />
       <Route  path="*"  render={()=> <h1>Page Not Found</h1>} />
      </Switch>
      <Footer />
    </div>
  );
  }
}

export default App;


