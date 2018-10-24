import { combineReducers } from "redux";
import search from "./search_reducer";
import results from "./results_reducer";

export default combineReducers({
  search,
  results
});
