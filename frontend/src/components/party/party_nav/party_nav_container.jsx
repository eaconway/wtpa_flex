
import { connect } from 'react-redux';
import PartyNav from "./party_nav";
import { closeDetails, receiveDropdown } from '../../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
    const party = state.entities.partys[ownProps.match.params.partyId] || {};
    return {
        party: party,
        currentUser: state.session.currentUser,
        details: state.ui.details,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        receiveDropdown: (dropdown) => dispatch(receiveDropdown(dropdown)),
        closeDetails: () => dispatch(closeDetails()),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartyNav);