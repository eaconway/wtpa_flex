import * as OpinionAPIUtil from '../util/opinion_api_util';

export const RECEIVE_OPINION = "RECEIVE_OPINION";
export const RECEIVE_OPINIONS = "RECEIVE_OPINIONS";

export const receiveOpinion = opinion => ({
  type: RECEIVE_OPINION,
  opinion
});

export const receiveOpinions = opinions => ({
    type: RECEIVE_OPINIONS,
    opinions
});

export const createOpinion = newOpinion => dispatch => {
    return OpinionAPIUtil.createOpinion(newOpinion).then(res => dispatch(receiveOpinion(res)));
};

export const fetchPartyOpinions = partyId => dispatch => {
    return OpinionAPIUtil.fetchPartyOpinions(partyId).then(res =>
      dispatch(receiveOpinions(res))
    );
};