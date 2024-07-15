import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../Service/apiService';
import { ToastContainer, toast } from 'react-toastify';



const DeleteUserModal = (props) => {
    const { show, setShow, handleClose, dataDelete } = props


    const handleDeleteSubmit = async () => {
        let res = await deleteUser(dataDelete.id)


        if (res.data && res.data.EC === 0) {
            toast.success('Xóa người dùng thành công')
            handleClose();

            props.setCurrentPage(1)
            await props.fetchListUserWithPaginate(1)
            // await props.fetchListUser()
        }
        if (res.data && res.data.EC !== 0) {
            toast.error(res.data.EM)
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete this <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b> user</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDeleteSubmit} >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default DeleteUserModal;