import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import '../styles/Navbar.css';

class Navbar extends Component {
    render() {
        const allLinks = this.props.data.map(value => <li className="nav-item" key={value.name}><NavLink exact activeClassName="active-NavLink" className="NavLink" to={`/${value.name}`} >{value.name} </NavLink></li>)
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink exact activeClassName="active-NavLink" className="NavLink" to="/">Home </NavLink>
                <ul className="navbar-nav">
                    {allLinks}
                </ul>
            </nav>
        )
    }
}

export default withRouter(Navbar);