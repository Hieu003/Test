
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewUserModal from './AddNewUserModal';
import '../Content/ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';
import { useEffect, useState } from "react"
import { getListUser } from "../../Service/apiService";
import UpdateUserModal from './UpdateUserModal';


const ManageUser = () => {

    const [show, setShowModal] = useState(false)

    const [showUpdateModal, setShowUpdateModal] = useState(false)

    const [dataUpdate, setDataUpdate] = useState({})

    const [listUser, setListUser] = useState([

    ])




    const handleShowUpdateModal = (user) => {
        setShowUpdateModal(true);
        setDataUpdate(user)
    }

    useEffect(() => {
        fetchListUser()
    }, []);

    const fetchListUser = async () => {
        let res = await getListUser()
        if (res.data.EC === 0) {
            setListUser(res.data.DT)
        }
        console.log(res)
    }

    const resetListUser = () => {
        setDataUpdate({})
    }
    return (
        <div className="manage-user-container">

            <div className="title">
                Manage User
            </div>

            <div className="user-content">
                <button className='btn btn-primary' onClick={() => setShowModal(true)}><FcPlus /> Add new user</button>
                <div className='user-table '><TableUser listUser={listUser} handleShowUpdateModal={handleShowUpdateModal} /> </div>

                <AddNewUserModal show={show} setShow={setShowModal} fetchListUser={fetchListUser} />
                <UpdateUserModal resetListUser={resetListUser} showUpdateModal={showUpdateModal} setShowUpdateModal={setShowUpdateModal} dataUpdate={dataUpdate} fetchListUser={fetchListUser} />
            </div>



        </div>
    )
}

export default ManageUser