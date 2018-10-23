import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    render () {
        return <ul className="nav-bar-list">
            <Link to="/signup" className="nav-link">
              Sign-up
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </ul>;
    }
}

export default NavBar;