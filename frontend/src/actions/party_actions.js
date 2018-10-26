import * as PartyAPIUtil from '../util/party_api_util';
import { receivePartyErrors } from './error_actions';

export const RECEIVE_PARTIES = 'RECEIVE_PARTIES';
export const RECEIVE_PARTY = 'RECEIVE_PARTY';
export const REMOVE_PARTY = 'REMOVE_PARTY';

export const receiveParties = parties => ({
    type: RECEIVE_PARTIES,
    parties
});

export const receiveParty = party => ({
    type: RECEIVE_PARTY,
    party
});

export const removeParty = partyId => ({
    type: REMOVE_PARTY,
    partyId
});

export const requestParties = () => dispatch => (
    PartyAPIUtil.fetchParties
        .then(parties => dispatch(receiveParties(parties)),
        err => dispatch(receivePartyErrors(err)))
);

export const requestParty = (id) => dispatch => (
    PartyAPIUtil.fetchParty(id)
        .then(party => dispatch(receiveParty(party)),
            err => dispatch(receivePartyErrors(err)))
);

export const createParty = (newParty) => dispatch => (
    PartyAPIUtil.createParty(newParty)
        .then(party => dispatch(receiveParties(party)),
            err => dispatch(receivePartyErrors(err)))
);