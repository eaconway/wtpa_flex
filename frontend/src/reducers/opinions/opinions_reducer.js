import { RECEIVE_OPINION, RECEIVE_OPINIONS, REMOVE_OPINION } from "../../actions/opinion_actions";
import merge from "lodash/merge";

const opinionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_OPINION:
      return Object.assign({}, state, { [action.opinion.data._id]: action.opinion });
      //   return action.opinion;
    case RECEIVE_OPINIONS:
        return action.opinions
    case REMOVE_OPINION:
        delete newState[action.opinionId];
        return newState;
    default:
        return state;
  }
};

export default opinionsReducer;
