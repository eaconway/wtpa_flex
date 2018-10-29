import {connect} from 'react-redux';
import UpdateProfile from './update_profile';
import { updateUser } from '../../actions/user_actions';
// import { deleteUser } from '../../util/user_api_util';

const mapStateToProps = state => {
  let currentUser = (state.entities.users[state.session.id] != undefined) ? state.entities.users[state.session.id].data : null;
  return {
    currentUser: currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user)),
    // deleteUser: id => dispatch(deleteUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);