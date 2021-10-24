import React from "react"

import './styles/App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './Routes';

import whiskey from "./dogImgs/whiskey.jpg"
import hazel from "./dogImgs/hazel.jpg"
import tubby from "./dogImgs/tubby.jpg"


class App extends React.Component {
  static defaultProps = {
    dogs: [ //An array of objects.
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
      },{
        name: "Barkomet",
        age: 666,
        src: hazel,
        facts: [
          "Despair hound.",
          "Hates hope and light.",
          "Knows the date adn time of your death."
        ]
      }
    ]
  }

  render() {
    return (
      <div className="App ">
        <Navbar data={this.props.dogs} />
        <Routes data={this.props.dogs} />
        <Footer />
      </div>
    );
  }
}

export default App;


