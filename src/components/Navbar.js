import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import '../styles/Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { query: "" } //Apparently you have to do this for every input you put into React 
        //this.handleLogin = this.handleLogin.bind(this);
     
    }

   
    render() {
        return (
            <header className="Navbar">
                Test
            </header>
        )
    }
}

export default withRouter(Navbar); //Notice this is different from the others, it has withRouter and this is what allows the redirect in handleLogin to work. 