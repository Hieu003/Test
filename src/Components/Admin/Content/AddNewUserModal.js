import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Content/ManageUser.scss'
import { FcPlus } from "react-icons/fc";

const AddNewUserModal = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('User');
    const [image, setImage] = useState('');
    const [previewimage, setPreviewImage] = useState('');

    const handleOnChangeImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        } else {
            setPreviewImage('')
        }
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" className='modal-add'>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Username</label>
                        <input type="text" className="form-control" id="inputCity" value={username} onChange={(event) => { setUsername(event.target.value) }} />
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Role</label>
                        <select id="inputState" className="form-select" value={role} onChange={(event) => { setRole(event.target.value) }}>
                            <option selected value={"user"}>User</option>
                            <option value={"admin"}>Admin </option>
                        </select>
                    </div>
                    <div className='col-md-12 '>
                        <label className='form-label label-upload ' htmlFor='uploadImage'> <FcPlus /> Upload file image</label>
                        <input type='file' id='uploadImage' hidden onChange={(event) => { handleOnChangeImage(event) }} />
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
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default AddNewUserModal