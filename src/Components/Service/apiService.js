
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

export { postCreateNewUser, getListUser }