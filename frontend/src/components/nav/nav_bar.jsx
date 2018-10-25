import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loginOptions: 'hidden',
            registerOptions: 'hidden',
            name: '',
            email: '',
            phone: '',
            password: ''
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(option) {
        if (option === 'register' && this.state.registerOptions === 'hidden') {
            this.setState({registerOptions: ''});
        } else if (option === 'login' && this.state.loginOptions === 'hidden') {
            this.setState({loginOptions: ''});
        } else if (option === 'register' && this.state.registerOptions === '') {
            this.setState({registerOptions: 'hidden'});
        } else {
            this.setState({loginOptions: 'hidden'});
        }
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value});
    }
 
    login() {
        this.props.loginUser({email: this.state.email, password: this.state.password}).then();
    }

    register() {
        this.props.registerUser({name: this.state.name, email: this.state.email, password: this.state.password}).then();
    }

    render () {
        let rightProfile = '';
        if (this.props.currentUser.id != null) {
            rightProfile = <img className='header-icon' src={require('../../images/header/profile.jpg')} />;
        } else {
            rightProfile = <img />
        }
        return (
            <div className='modal-forms'>
                
            
                <ul className="nav-bar-list">
                    <div className="user-icon-div">
                        <div className='signin-login'>
                            <span className='signup-header-link'><button onClick={() => this.props.openModal('signup')}>Register</button></span>
                            <span className='login-header-link'><button onClick={() => this.props.openModal('login')}>Log in</button></span>
                        </div>
                    </div>
                </ul>
            </div>
            
        );
    }
}

export default NavBar;