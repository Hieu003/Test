
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewUserModal from './AddNewUserModal';
import '../Content/ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';
import { useEffect, useState } from "react"
import { getListUser } from "../../Service/apiService";


const ManageUser = () => {

    const [show, setShowModal] = useState(false)

    const [listUser, setListUser] = useState([

    ])

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
    return (
        <div className="manage-user-container">

            <div className="title">
                Manage User
            </div>

            <div className="user-content">
                <button className='btn btn-primary' onClick={() => setShowModal(true)}><FcPlus /> Add new user</button>
                <div className='user-table '><TableUser listUser={listUser} /> </div>

                <AddNewUserModal show={show} setShow={setShowModal} fetchListUser={fetchListUser} />
            </div>



        </div>
    )
}

export default ManageUser