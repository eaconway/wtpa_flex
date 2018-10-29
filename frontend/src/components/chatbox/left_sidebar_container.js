import { connect } from "react-redux";
import LeftSidebar from "./left_sidebar";
import { requestParties, requestParty } from "../../actions/party_actions";
import {
  createOpinion,
  fetchPartyOpinions
} from "../../actions/opinion_actions";
import { getPartyOpinionForUser } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  const partyId = ownProps.match.params.id;
  const userId = state.session.id;
  return {
    currentUser: state.session,
    party: state.parties[partyId],
    opinion: getPartyOpinionForUser(state, partyId, userId)
  };
};

// const mapStateToProps = (state, ownProps) => ({
//   currentUser: state.session,
//   party: state.parties[ownProps.match.params.id],
//   opinion: state.opinions
// });

const mapDispatchToProps = dispatch => {
  return {
    requestParty: id => dispatch(requestParty(id)),
    createOpinion: opinion => dispatch(createOpinion(opinion)),
    fetchPartyOpinions: partyId => dispatch(fetchPartyOpinions(partyId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSidebar);
