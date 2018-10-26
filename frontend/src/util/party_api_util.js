import axios from "axios";
const $ = window.$;
// export const fetchParty = id => (
//     axios
//     .get(`/api/parties/${id}`)
// )

// export const fetchParty = id => (
//     fetch(`/api/parties/${id}`, {
//         method: 'GET'
//     })
// )

export const fetchParties = () => (
    $.ajax({
        url: '/api/parties',
        method: 'GET'
    })
)

export const fetchParty = id => (
    $.ajax({
        url: `/api/parties/${id}`,
        method: 'GET'
    })
)

export const createParty = party => (
    $.ajax({
        url: `/api/parties`,
        method: 'POST',
        data: {party}
    })
)

export const updateParty = party => (
    $.ajax({
        url: `/api/parties/${party.id}`,
        method: 'PATCH',
        data: { party }
    })
)

export const deleteParty = partyId => (
    $.ajax({
        url: `/api/parties/${partyId}`,
        method: 'DELETE'
    })
)