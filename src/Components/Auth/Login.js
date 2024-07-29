import { useState } from "react"
import ".//Login.scss"
import { Navigate, useNavigate } from "react-router-dom"
import { postLogin } from "../Service/apiService"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { doLogin } from "../../redux/action/loginAction"
import { ImSpinner2 } from "react-icons/im";
import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const ref = useRef(null)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigateSignUp = () => {
        navigate('/register')
    }


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmitLogin = async () => {
        //Validate
        ref.current.continuousStart()
        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            ref.current.complete()
            toast.error('Invalid Email')
            return
        }
        if (!password) {
            ref.current.complete()
            toast.error('Invalid Password')
            return
        }
        setIsLoading(true)

        // call Api 
        let res = await postLogin(email, password)
        if (res.data && res.data.EC === 0) {
            dispatch(doLogin(res))
            ref.current.complete()
            toast.success(res.data.EM)
            setIsLoading(false)
            navigate("/")
        }
        if (res.data && res.data.EC !== 0) {
            ref.current.complete()
            toast.error(res.data.EM)
            setIsLoading(false)
        }

    }
    return (
        <div className="login-container">
            <div className="login-header ">
                <span>Dont Have an account yet?</span>
                <button className="btn-signup" onClick={() => handleNavigateSignUp()}>Sign Up</button>
            </div>
            <div className="login-title col-4 mx-auto">
                Have Some Question
            </div>

            <div className="login-welcome col-4 mx-auto">
                Hello, who's this
            </div>

            <div className="login-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label>Password</label>
                    <input type={"password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}

                    />
                </div>
                <span className="forgot-password">Forgot Password ?</span>
                <div>
                    <button className="btn-submit" onClick={() => handleSubmitLogin()} disabled={isLoading}>

                        {isLoading === true && <ImSpinner2 className="load-icon" />}
                        <span>Login to Answer</span>
                    </button>

                </div>
                <div className="text-center">
                    <span className="back" onClick={() => navigate('/')}> &#60;&#60; Back to HomePage</span>
                </div>

            </div>
            <div>
                <LoadingBar color='#42b0ff' ref={ref} height={4} shadow={true} />
            </div>

        </div>


    )
}

export default Login