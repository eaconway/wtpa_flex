import {connect} from 'react-redux';
import UpdateProfile from './update_profile';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = state => {
  let currentUser = (state.entities.users[state.session.id] != undefined) ? state.entities.users[state.session.id].data : null;
  return {
    currentUser: currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);