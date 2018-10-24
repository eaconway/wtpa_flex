import { clearSessionErrors } from './error_actions';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

export const closeModalAndClearErrors = () => dispatch => {
    dispatch(clearSessionErrors());
    dispatch(closeModal());
};

export const openModalAndClearErrors = (form) => dispatch => {
    dispatch(clearSessionErrors());
    dispatch(openModal(form));
};
