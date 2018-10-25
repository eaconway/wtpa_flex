import { connect } from "react-redux";
import { logoutUser, loginUser, registerUser } from "../../util/session_api_util";
import { openModal } from "../../actions/modal_actions";
import NavBar from "./nav_bar";

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session
  };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal)),
    loginUser: userData => dispatch(loginUser(userData)),
    registerUser: userData => dispatch(registerUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
