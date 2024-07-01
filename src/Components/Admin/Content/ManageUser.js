import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewUserModal from './AddNewUserModal';
import '../Content/ManageUser.scss'

const ManageUser = () => {



    return (
        <div className="manage-user-container">

            <div className="title">
                Manage User
            </div>

            <div className="user-content">
                <div>table user
                </div>

                <AddNewUserModal />
            </div>



        </div>
    )
}

export default ManageUser