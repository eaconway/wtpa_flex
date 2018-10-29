import { connect } from "react-redux";

// import {} from "../../util/chat_api_util";
import ChatRoom from "./chat_room";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session,
    partyId: ownProps.match.params.partyId
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoom);
