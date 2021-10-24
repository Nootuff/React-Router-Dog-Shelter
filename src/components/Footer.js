import React, { Component } from "react";
import '../styles/Footer.css';

class Navbar extends Component {
    render() {
       
        return (
            <footer className="Footer">
               <p><a href="https://github.com/Nootuff" target="_blank" rel="noreferrer">Created by Adam Walker</a></p>
            </footer>
        )
    }
}

export default Navbar; //Notice this is different from the others, it has withRouter and this is what allows the redirect in handleLogin to work. 