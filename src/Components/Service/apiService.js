
import axios from '../../Utils/axiosCustom';

const postCreateNewUser = (email, password, username, role, image) => {
    const newUserFormData = new FormData();
    newUserFormData.append('email', email)
    newUserFormData.append('password', password)
    newUserFormData.append('username', username)
    newUserFormData.append('role', role)
    newUserFormData.append('userImage', image)

    return axios.post('api/v1/participant', newUserFormData);
}

const getListUser = () => {
    return axios.get('api/v1/participant/all')
}

const putListUser = (id, username, role, image) => {
    const updateUserFormData = new FormData();
    updateUserFormData.append('id', id)
    updateUserFormData.append('username', username)
    updateUserFormData.append('role', role)
    updateUserFormData.append('userImage', image)

    return axios.put('api/v1/participant', updateUserFormData);
}

const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } })
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (email, password) => {
    return axios.post('api/v1/login', { email, password })
}

const postRegister = (email, password, username) => {
    return axios.post('api/v1/register', { email, password, username })
}

export { postCreateNewUser, getListUser, putListUser, deleteUser, getUserWithPaginate, postLogin, postRegister }