import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Content/ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { putListUser } from '../../Service/apiService';

import _ from 'lodash';


const ViewUserModal = (props) => {

    const { showViewModal, setShowViewModal, dataUpdate, resetListUser } = props
    // const [show, setShow] = useState(false);
    const handleClose = () => {
        setEmail('')
        setPassword('')
        setUsername('')
        setRole("")
        setPreviewImage('')
        setShowViewModal(false);
        resetListUser()
    }
    const handleShow = () => {
        setEmail('')
        setPassword('')
        setUsername('')
        setRole("")
        setPreviewImage('')
        setShowViewModal(true);
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('User');
    const [image, setImage] = useState('');
    const [previewimage, setPreviewImage] = useState('');


    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {

            setEmail(dataUpdate.email)
            setUsername(dataUpdate.username)
            setPassword(dataUpdate.password)
            setRole(dataUpdate.role)
            setPreviewImage(`data:image/jpeg;base64, ${dataUpdate.image}`)
        }

    }, [dataUpdate])

    const handleOnChangeImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        } else {
            setPreviewImage('')
        }
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitUpdateUser = async () => {
        //Post  user

        let res = await putListUser(dataUpdate.id, username, role, image)


        if (res.data && res.data.EC === 0) {
            toast.success('Cập nhật thành công ')
            handleClose();
            await props.fetchListUser()
        }
        if (res.data && res.data.EC !== 0) {
            toast.error(res.data.EM)
        }

    }



    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button> */}

            <Modal show={showViewModal} onHide={handleClose} backdrop="static" className='modal-add' size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>View A User</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" value={email} disabled={true} onChange={(event) => { setEmail(event.target.value) }} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" value={password} disabled={true} onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Username</label>
                        <input type="text" className="form-control" id="inputCity" value={username} disabled={true} onChange={(event) => { setUsername(event.target.value) }} />
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Role</label>
                        <select id="inputState" className="form-select" value={role} disabled={true} onChange={(event) => { setRole(event.target.value) }}>
                            <option selected value={"user"}>User</option>
                            <option value={"admin"}>Admin </option>
                        </select>
                    </div>
                    <div className='col-md-12 image-preview'>
                        {previewimage ? <img src={previewimage} /> : <span>Preview Image</span>}
                    </div>
                </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}


export default ViewUserModal