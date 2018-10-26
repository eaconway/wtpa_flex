import { connect } from "react-redux";
import LeftSidebar from "./left_sidebar";

const mapStateToProps = state => {
  return {
    currEvent: state.selectedMarker
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSidebar);
