import {connect} from 'react-redux';
import Profile from './profile';
import { updateUser, fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => {
  let currentUserId = state.session.id;
  let profilePic = state.entities.users.currentUserId ? state.entities.users.currentUserId.profilePicture : null;
  return { 
    currentUserId: currentUserId,
    profilePicture: profilePic };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user)),
    fetchUser: id => dispatch(fetchUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);