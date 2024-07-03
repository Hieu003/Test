import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewUserModal from './AddNewUserModal';
import '../Content/ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';

const ManageUser = () => {

    const [show, setShowModal] = useState(false)

    return (
        <div className="manage-user-container">

            <div className="title">
                Manage User
            </div>

            <div className="user-content">
                <button className='btn btn-primary' onClick={() => setShowModal(true)}><FcPlus /> Add new user</button>
                <div className='user-table '><TableUser /> </div>

                <AddNewUserModal show={show} setShow={setShowModal} />
            </div>



        </div>
    )
}

export default ManageUser