import {
    RECEIVE_OPINION,
    REMOVE_OPINION
} from "../../actions/opinion_actions";
import merge from "lodash/merge";

const opinionReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_OPINION:
            return action.opinion;
        case REMOVE_OPINION:
            delete newState[action.opinionId];
            return newState;
        default:
            return state;
    }
};

export default opinionReducer;