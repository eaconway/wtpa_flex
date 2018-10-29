import { connect } from "react-redux";
import {
  removehighlightMarker,
  highlightMarker
} from "../../actions/map_actions";
import {requestParties, requestParty} from '../../actions/party_actions';

import Map from "./map";
import './map.css';

const mapStateToProps = (state, ownProps) => ({
  parties: Object.values(state.parties)
});

const mapDispatchToProps = dispatch => ({
  highlightMarker: place => dispatch(highlightMarker(place)),
  removehighlightMarker: () => dispatch(removehighlightMarker()),
  requestParty: (id) => dispatch(requestParty(id)) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
