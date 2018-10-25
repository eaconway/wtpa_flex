import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

//TODO: refactor other reducers into this that are entities
const entitiesReducer = combineReducers({
    users: usersReducer
});

export default entitiesReducer;