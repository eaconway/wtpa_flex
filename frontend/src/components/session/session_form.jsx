import React from 'react';

class SessionForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            password:'',
            password2:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.demoSignIn = this.demoSignIn.bind(this);
    }

    update(field){
        return e => this.setState({ [field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        debugger

        this.props.processForm(this.state)
            .then(() => this.props.closeModal())
    }

    demoSignIn(e){
        e.preventDefault();
        this.setState({
            email: 'demo@wtpa.com',
            password: 'password'
        });
        
        this.props
          .processForm(this.state)
          .then(() => this.props.closeModal());
    }

    render() {
        let sessionBody = this.props.formType === 'signup' ? (
            <form className='session-form' onSubmit={this.handleSubmit}>
                <h3 className='form-header'>Sign up below!</h3>
                <input type='text' value={this.state.email} 
                    onChange={this.update('email')} className='form-input'
                    placeholder='Email'/>
                <input type='text' value={this.state.name}
                    onChange={this.update('name')} className='form-input' 
                    placeholder='Name'/>
                <input type='password' value={this.state.password}
                    onChange={this.update('password')} className='form-input' 
                    placeholder='Create Password'/>
                <input type='password' value={this.state.password2}
                    onChange={this.update('password2')} className='form-input'
                    placeholder='Re-enter Password' />
                <input type='submit' value='Signup!' 
                    className='form-input submit-button'/>
                <span className='switch-form-span'>Already have an account? {this.props.otherForm}</span>
            </form>
        ) : (
            <form className='session-form' onSubmit={this.handleSubmit}>
                <h3 className='form-header'>Log In below!</h3>
                <input type='text' value={this.state.email}
                    onChange={this.update('email')} className='form-input'
                    placeholder='Email' />
                <input type='password' value={this.state.password}
                    onChange={this.update('password')} className='form-input'
                    placeholder='Provide Password' />
                <input type='submit' value='Log In!'
                    className='form-input submit-button' />
                <span className='switch-form-span'>Already have an account? {this.props.otherForm}</span>
                <button onClick={this.demoSignIn} className='demo-button'>Demo</button>
            </form>
        )

        return (
            <div >
                {sessionBody}
            </div>
            )
    }
};

export default SessionForm;