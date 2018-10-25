import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../util/session_api_util';
import SessionForm from './session_form';
import { openModalAndClearErrors, closeModalAndClearErrors } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(loginUser(user)),
    otherForm: (
      <span className='switch-form'
        onClick={(e) => {
          e.preventDefault();
          dispatch(openModalAndClearErrors('signup'));
        }}>
        Click here to register.
            </span>
    ),
    closeModal: () => dispatch(closeModalAndClearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);