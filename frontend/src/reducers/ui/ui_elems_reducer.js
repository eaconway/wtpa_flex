import {
  RECEIVE_DROPDOWN,
  CLEAR_DROPDOWN
} from "../../actions/ui_actions";
import { RECEIVE_DETAILS, CLOSE_DETAILS } from "../../actions/ui_actions";
import merge from "lodash/merge";

const initialState = {
  dropdown: null,
  details: {
    visible: true,
    info: false,
    users: false
  },
};

const UIReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_DETAILS:
      newState.details = Object.assign({}, newState.details, action.details);
      newState.details.visible = true;
      return newState;
    case CLOSE_DETAILS:
      newState.details.visible = false;
      return newState;
    case RECEIVE_DROPDOWN:
      newState.dropdown = action.dropdown;
      return newState;
    case CLEAR_DROPDOWN:
      newState.dropdown = null;
      return newState;
    default:
      return state;
  }
};

export default UIReducer;
