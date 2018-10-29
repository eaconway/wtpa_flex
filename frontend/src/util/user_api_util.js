import axios from "axios";
const $ = window.$;

export const updateUser = userData => {
    return axios
      .patch(`/api/users/${userData.id}`, userData)
};

export const fetchUser = id => {
    return axios
        .get(`/api/users/${id}`)
};

export const fetchUsers = () => {
    return axios
        .get('/api/users')
};

// export const deleteUser = () => {
//     return axios
//         .delete('/api/users')
// };