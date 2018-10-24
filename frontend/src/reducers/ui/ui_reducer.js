import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import UIElemsReducer from './ui_elems_reducer';
// import filtersReducer from './filters_reducer';

export default combineReducers({
    modal: modalReducer,
    ui: UIElemsReducer
});
