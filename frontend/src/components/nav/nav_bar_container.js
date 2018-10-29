import { connect } from "react-redux";
import { logoutUser, loginUser, registerUser } from "../../util/session_api_util";
import { openModal } from "../../actions/modal_actions";
import NavBar from "./nav_bar";
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = ({ session, entities }) => {
  let user = (entities.users[session.id] != undefined) ? entities.users[session.id].data : null;
  return {
    currentUser: session,
    user: user
  };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal)),
    loginUser: userData => dispatch(loginUser(userData)),
    registerUser: userData => dispatch(registerUser(userData)),
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
