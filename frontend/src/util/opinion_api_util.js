import axios from "axios";
const $ = window.$;

//TODO: finish update route
export const updateOpinion = opinionData => {
    return axios.patch(`/api/opinions/${opinionData.id}`, opinionData);
};

export const createOpinion = opinionData => {
    return axios.post(`/api/opinions`, opinionData);
};

export const fetchPartyOpinions = partyId => {
    return axios.get(`/api/opinions/party/${partyId}`);
};