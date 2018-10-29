import {connect} from 'react-redux';
import ChangeEmail from './change_email';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = state => {
  let currentUser = (state.entities.users[state.session.id] != undefined) ? state.entities.users[state.session.id].data : null;
  return {
    currentUser: currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: id => dispatch(updateUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);