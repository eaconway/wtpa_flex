const $ = window.$;

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

export const createOpinion = opinion => (
    $.ajax({
        url: `/api/opinions/`,
        method: 'POST',
        data: { opinion }
    })
)