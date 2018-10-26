export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const RECEIVE_PARTY_ERRORS = 'RECEIVE_PARTY_ERRORS';
export const CLEAR_PARTY_ERRORS = 'CLEAR_PARTY_ERRORS';

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
});

export const receivePartyErrors = errors => ({
    type: RECEIVE_PARTY_ERRORS,
    errors
});

export const clearPartyErrors = () => ({
    type: CLEAR_PARTY_ERRORS,
});


