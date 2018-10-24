import { combineReducers } from "redux";
import date from "./date_reducer";
import events from "./events_reducer";
import venue from "./venue_reducer";

export default combineReducers({
  date,
  events,
  venue
});
