import { useState } from "react"
import ".//Register.scss"
import { Navigate, useNavigate } from "react-router-dom"
import { postRegister } from "../Service/apiService"
import { toast } from "react-toastify"
import { VscEye, VscEyeClosed } from "react-icons/vsc"

const Register = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState(" ")
    const [isShowPassword, setIsShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/login')
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const handleSubmitRegister = async () => {
        //Validate
        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.error('Invalid Email')
            return
        }
        if (!password) {
            toast.error('Invalid Password')
            return
        }

        let res = await postRegister(email, password)
        if (res && res.EC === 0) {
            toast.success(res.EM)
            navigate("/login")
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM)

        }
    }
    return (
        <div className="Register-container">
            <div className="Register-header ">
                <span>Already have an account ?</span>
                <button className="btn-signup" onClick={() => handleNavigateLogin()}>Login</button>
            </div>
            <div className="Register-title col-4 mx-auto">
                Welcome to sign up page
            </div>

            <div className="Register-welcome col-4 mx-auto">
                Creat new account for free :D
            </div>

            <div className="Register-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label>Password</label>
                    <input type={isShowPassword ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}

                    />
                    {isShowPassword ?
                        <span className="icon-eye" onClick={() => setIsShowPassword(false)}>
                            <VscEye />
                        </span> :
                        <span className="icon-eyeclosed" onClick={() => setIsShowPassword(true)}>
                            <VscEyeClosed /></span>}
                    <label>Username</label>
                    <input type={"text"}
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <button className="btn-submit" onClick={() => handleSubmitRegister()}>
                        Create new account
                    </button>

                </div>
                <div className="text-center">
                    <span className="back" onClick={() => navigate('/')}> &#60;&#60; Back to HomePage</span>
                </div>

            </div>

        </div>
    )
}

export default Register