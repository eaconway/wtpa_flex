import {connect} from 'react-redux';
import LeftSidebar from './left_sidebar';
import { requestParties, requestParty } from '../../actions/party_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session, 
  party: state.parties[ownProps.match.params.id],
  opinion: state.opinions
});


const mapDispatchToProps = dispatch => {
  return { requestParty: id => dispatch(requestParty(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);