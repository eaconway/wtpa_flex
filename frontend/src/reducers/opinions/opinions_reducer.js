import { RECEIVE_OPINION, RECEIVE_OPINIONS } from "../../actions/opinion_actions";

const opinionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_OPINION:
      return Object.assign({}, state, { [action.opinion.data._id]: action.opinion });
    case RECEIVE_OPINIONS:
        return action.opinions
    default:
        return state;
  }
};

export default opinionsReducer;
