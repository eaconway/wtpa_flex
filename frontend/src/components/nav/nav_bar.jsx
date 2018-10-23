import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    render () {
        return <ul className="nav-bar-list">
            <div onClick={() => this.props.openModal('login')}
                className={'nav-link'}>Login</div>
            <div onClick={() => this.props.openModal('signup')}
                className={'nav-link'}>Signup</div>
          </ul>;
    }
}

export default NavBar;