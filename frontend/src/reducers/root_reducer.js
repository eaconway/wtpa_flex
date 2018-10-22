import { combineReducers } from 'redux';
// import entitiesReducer from './entities/entities_reducer';
import sessionReducer from './session/session_reducer';
// import usersReducer from './session/users_reducer';
// import uiReducer from './ui/ui_reducer';
import errorsReducer from './errors/errors_reducer';

export default combineReducers({
    session: sessionReducer,
    errors: errorsReducer
});
