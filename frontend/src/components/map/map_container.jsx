import { connect } from "react-redux";
import {
  removehighlightMarker,
  highlightMarker
} from "../../actions/map_actions";
import Map from "./map";

const mapStateToProps = state => {
  return {
    venues: state.events.venue,
    artistSearch: state.search_status
  };
};

const mapDispatchToProps = dispatch => ({
  highlightMarker: place => dispatch(highlightMarker(place)),
  removehighlightMarker: () => dispatch(removehighlightMarker())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
