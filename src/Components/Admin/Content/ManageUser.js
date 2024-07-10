
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewUserModal from './AddNewUserModal';
import '../Content/ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';
import { useEffect, useState } from "react"
import { getListUser } from "../../Service/apiService";
import UpdateUserModal from './UpdateUserModal';
import ViewUserModal from './ViewUserModal';
import DeleteUserModal from './DeleteUserModal';


const ManageUser = () => {

    const [show, setShowModal] = useState(false)

    const [showUpdateModal, setShowUpdateModal] = useState(false)

    const [showViewModal, setShowViewModal] = useState(false)

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})

    const [dataDelete, setDataDelete] = useState({})
    const [listUser, setListUser] = useState([

    ])


    const handleShowViewModal = (user) => {
        setDataUpdate(user)
        setShowViewModal(true)
    }

    const handleShowUpdateModal = (user) => {
        setShowUpdateModal(true);
        setDataUpdate(user)
    }

    const handleShowDeleteModal = (user) => {
        setShowDeleteModal(true)
        setDataDelete(user)
        console.log("data delete", dataDelete);
    }

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false)
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
                <div className='user-table '><TableUser
                    handleShowViewModal={handleShowViewModal}
                    listUser={listUser}
                    handleShowDeleteModal={handleShowDeleteModal}
                    handleShowUpdateModal={handleShowUpdateModal} /> </div>

                <AddNewUserModal show={show} setShow={setShowModal} fetchListUser={fetchListUser} />
                <UpdateUserModal resetListUser={resetListUser} showUpdateModal={showUpdateModal} setShowUpdateModal={setShowUpdateModal} dataUpdate={dataUpdate} fetchListUser={fetchListUser} />
                <DeleteUserModal fetchListUser={fetchListUser} dataDelete={dataDelete} show={showDeleteModal} setShow={setShowDeleteModal} handleClose={handleCloseDeleteModal} />
                <ViewUserModal showViewModal={showViewModal} setShow={setShowViewModal} resetListUser={resetListUser} fetchListUser={fetchListUser} dataUpdate={dataUpdate} />
            </div>



        </div>
    )
}

export default ManageUser