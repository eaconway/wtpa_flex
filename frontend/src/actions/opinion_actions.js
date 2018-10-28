export const RECEIVE_OPINION = "RECEIVE_OPINION";
export const REMOVE_OPINION = "REMOVE_OPINION";

// export const receiveOpinions = parties => ({
//   type: RECEIVE_PARTIES,
//   parties
// });

export const receiveOpinion = opinion => ({
  type: RECEIVE_OPINION,
  opinion
});

export const removeOpinion = opinionId => ({
  type: REMOVE_OPINION,
  opinionId
});
