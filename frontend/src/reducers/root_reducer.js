import { combineReducers } from "redux";
import session from "./session/session_reducer";
import ui from "./ui/ui_reducer";
import selectedMarker from "./selected_marker/selected_marker_reducer";
import searchStatus from "./search_status/search_root_reducer";
import events from "./events/events_root_reducer";
import errorsReducer from './errors/errors_reducer';

export default combineReducers({
  session,
  ui,
  selectedMarker,
  searchStatus,
  events,
  errors: errorsReducer
});
