import {
  RECEIVE_PARTIES,
  RECEIVE_PARTY,
  REMOVE_PARTY
} from "../../actions/party_actions";
import merge from "lodash/merge";

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
      case RECEIVE_PARTIES:
        return action.parties;
      case RECEIVE_PARTY:
        return merge({}, state, { [action.party._id]: action.party });
      case REMOVE_PARTY:
        delete newState[action.partyId];
        return newState;
      default:
        return state;
    }
};

export default eventsReducer;