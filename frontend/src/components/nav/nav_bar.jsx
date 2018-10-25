import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userOptions: 'hidden'
        };
        this.toggleUserOptions = this.toggleUserOptions.bind(this);
    }

    toggleUserOptions(e){
        e.preventDefault();
        if (this.state.userOptions === 'hidden'){
            this.setState({userOptions: ''})
        } else {
            this.setState({userOptions: 'hidden'})
        }
    }

    render () {
        let rightProfile = '';
        if (this.props.currentUser.id != null) {
            rightProfile = <img className='header-icon' src={require('../../images/header/profile.jpg')} onClick={this.toggleUserOptions} />;
        } else {
            rightProfile = <img />
        }
        return <ul className="nav-bar-list">
            <div className="user-icon-div">
                <div className='signin-login'>
                    <span className='signup-header-link'>Sign up</span>
                    <span className='login-header-link'>Log in</span>
                </div>
            </div>
          </ul>;
    }
}

export default NavBar;