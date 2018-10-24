// Please make sure to differentiate between EVENTS and PARTIES
import { RECEIVE_GEOCODER, CLEAR_RESULTS } from "../../actions/map_actions";

const eventsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_GEOCODER:
      if (action.result.features) {
        return action.result.features;
      } else {
        return state;
      }
    case CLEAR_RESULTS:
      return [];
    default:
      return state;
  }
};

export default eventsReducer;
