import React from 'react';
import './session.css';

class SessionForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            password:'',
            password2:'',
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.demoSignIn = this.demoSignIn.bind(this);
        // this.props.updateErrors([]);
    }

    update(field){
        return e => this.setState({ [field]: e.target.value})
    }

    handleSubmit(e){
        debugger;
        e.preventDefault();
        this.props.processForm(this.state)
            .then((err) =>{ 
                if(err) {
                    this.setState({errors: err.payload})
                } else {
                    this.props.closeModal();
                }
            })
    }

    changeFormField(field) {
    }

    demoSignIn(e) {
        e.preventDefault();
        this.props.processForm({ email: 'demo@wtpa.com', password: 'password'})
          .then(() => this.props.closeModal());
    }

    render() {
        let errors = this.state.errors;
        if (Object.values(this.state.errors).length > 0) { 
            Object.keys(this.state.errors).map((errorKey, i) => {
                errors[errorKey] = (<li className='session-form-error-messages' key={`error-msg-${i}`}>{errors[errorKey]}</li>);
            });
        }

        let sessionBody = this.props.formType === 'signup' ? (
            <div className='modal-form's>
                <div className='background-signup-login'></div>
                <div className='register-modal'>
                    <a onClick={() => this.props.closeModal()}><i className="fas fa-times"></i></a>
                    <div className='register-modal-inner'>
                        <h1>Register</h1>
                        <div className='register-modal-form-field'>
                            <p>Register for a Where's the Party At account below. Don't worry, none of your changes will be lost.</p>
                            <div className='register-form-field-inner'>
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <div className='login-email-input-field'>
                                        <span>Name</span>
                                        <input onChange={this.update('name')} type='text' />
                                    </div>
                                    {errors.name}
                                    <div className='login-password-input-field'>
                                        <span>Email Address</span>
                                        <input onChange={this.update('email')} type='text' />
                                    </div>
                                    {errors.email}
                                    <div className='login-password-input-field'>
                                        <span>Password</span>
                                        <input onChange={this.update('password')} type='password' />
                                    </div>
                                    {errors.password}
                                    <div className='login-password-input-field'>
                                        <span>Confirm password</span>
                                        <input onChange={this.update('password2')} type='password' />
                                    </div>
                                    {errors.password2}
                                    <div className='newsletter-checkbox'>
                                        <div className='newsletter-checkbox-inner'>
                                            <input type='checkbox'/>
                                            <span>I'd like to receive a Where's the Party At newsletter</span>
                                        </div>
                                    </div>
                                    <div className='register-button'>
                                        <input type='submit' value='REGISTER'/>
                                    </div>
                                </form>
                                <p>Already registered? {this.props.otherForm}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='modal-forms'>
                    <div className='background-login-signup'></div>
                    <div className='login-modal'>
                        
                        <div className='login-modal-inner'>
                            <a onClick={() => this.props.closeModal()}><i className="fas fa-times"></i></a>
                            <h1>Login</h1>
                            <div className='login-modal-form-field'>
                            <p>Enter your email and password below to log in. Don't worry, none of your changes will be lost.</p>
                            <div className='login-form-field-inner'>
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <div className='login-email-input-field'>
                                        <span>Email Address</span>
                                        <input onChange={this.update('email')} type='text' />
                                    </div>
                                    {errors.email}
                                    <div className='login-password-input-field'>
                                        <span>Password</span>
                                        <input onChange={this.update('password')} type='password' />
                                    </div>
                                    {errors.password}
                                    <div className='login-button'>
                                        <input type='submit' value='LOG IN' />
                                        <button onClick={(e) => this.demoSignIn(e)} className='demo-login'>DEMO LOGIN</button>
                                    </div>
                                </form>
                                <p>Don't have an account? {this.props.otherForm}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

        return (
            <div >
                {sessionBody}
            </div>
            )
    }
};

export default SessionForm;