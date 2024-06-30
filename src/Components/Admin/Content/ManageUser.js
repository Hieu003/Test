import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewUserModal from './AddNewUserModal';


const ManageUser = () => {



    return (
        <div className="manage-user-container">

            <div className="title">
                Manage User
            </div>

            <div className="user-content">
                <AddNewUserModal />
            </div>

            <div>table user
            </div>
        </div>
    )
}

export default ManageUser