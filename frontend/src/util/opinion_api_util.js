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

export const fetchCombinedOpinion = id => (
    $.ajax({
        url: `/api/opinions/party/${id}`,
        method: 'GET'
    })
)

export const fetchOpinion = id => (
    $.ajax({
        url: `/api/opinions/${id}`,
        method: 'GET'
    })
)

// export const createOpinion = opinion => (
//     $.ajax({
//         url: `/api/opinions/`,
//         method: 'POST',
//         data: { opinion }
//     })
// )
