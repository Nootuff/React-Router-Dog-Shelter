import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import '../styles/Navbar.css';

class Navbar extends Component {   
    render() {
        const  allLinks= this.props.data.map(value => <NavLink exact activeClassName="active-NavLink" className="NavLink" to={`/dogs/${value.name}`}>{value.name} </NavLink>  )
        return (
            <header className="Navbar">
                <NavLink exact activeClassName="active-NavLink" className="NavLink" to="/">Home </NavLink>

                {allLinks}
            </header>
        )
    }
}

export default withRouter(Navbar);