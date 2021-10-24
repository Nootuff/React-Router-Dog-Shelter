import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dogs from './components/Dogs';
import Error from './components/Error';
import View from './components/View';

class Routes extends Component {
    render() {
        const getDog = (props) => { //This arrow function  is what determines which dog data is sent as props to the view component. 
            let nameHolder = props.match.params.name; //Finds the name based on the url that is passed into the /: route.  
            let currentDog = this.props.data.find(
                (dog) => dog.name.toLowerCase() === nameHolder.toLowerCase() //If the data in nameHolder matches the .name value in the object you are looking at, the whole object is the value of this let.
            );
            if (currentDog !== undefined) { //If a currentDog is detected and is not undefined. 
                return < View {...props} data={currentDog} />; //The above let is passed in as a prop. 
            } else {
                return < Error />; //If there is no dog by that name found in the props, render the error page. 
            }
        }
        return (
            <Switch>
                <Route exact path="/" render={() => <Dogs data={this.props.data} />} /> 
                <Route exact path="/:name" render={getDog} />
                {/*My version <Route exact path="/dogs/:name" render={(routeProps) => < View {...routeProps} data={this.props.dogs} />} />*/}
                <Route exact render={() => < Error />} />
            </Switch>
        );
    }
}
export default Routes;
