import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import opinionsReducer from "./opinions/opinions_reducer";

//TODO: refactor other reducers into this that are entities
const entitiesReducer = combineReducers({
  users: usersReducer,
  opinions: opinionsReducer
});

export default entitiesReducer;