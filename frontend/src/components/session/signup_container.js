import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../util/session_api_util';
import SessionForm from './session_form';
import { openModalAndClearErrors, closeModalAndClearErrors } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(registerUser(user)),
        otherForm: (
            <span className='switch-form' 
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(openModalAndClearErrors('login'));
                }}>
                Login
            </span>
        ),
        closeModal: () => dispatch(closeModalAndClearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);