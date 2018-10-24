import { SEARCH_TEXT } from "../../actions/events_actions";

const searchReducer = (state = "", action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case SEARCH_TEXT:
      return action.text;
    default:
      return state;
  }
};

export default searchReducer;
