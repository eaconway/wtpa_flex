import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../util/session_api_util';
import { fetchUser } from '../../util/user_api_util';
import SessionForm from './session_form';
import { openModalAndClearErrors, closeModalAndClearErrors } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }) => {
    return {
        currentUserId: session.id,
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
                Click here to log in.
            </span>
        ),
        closeModal: () => dispatch(closeModalAndClearErrors()),
        fetchUser: (id) => dispatch(fetchUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);