import {
    BrowserRouter, Routes, Route
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';
import User from './Components/User/User';
import Admin from './Components/Admin/Admin';
import HomePage from './Components/Home/HomePage';
import ManageUser from "./Components/Admin/Content/ManageUser"
import DashBoard from "./Components/Admin/Content/DashBoard"
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';




const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path='/users' element={<User />} />

                </Route>
                <Route path='/admins' element={<Admin />} >
                    <Route index element={<DashBoard />} />
                    <Route path='manage-users' element={<ManageUser />} />
                </Route>
                <Route path='/login' element={<Login />} >
                </Route>
                <Route path='/register' element={<Register />} >
                </Route>
            </Routes>
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
    )
}

export default Layout