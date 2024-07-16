import { useState } from "react"
import ".//Login.scss"
import { Navigate, useNavigate } from "react-router-dom"
import { postLogin } from "../Service/apiService"
import { toast } from "react-toastify"

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    const handleSubmitLogin = async () => {

        let res = await postLogin(email, password)
        if (res.data && res.data.EC === 0) {
            toast.success(res.data.EM)
            navigate("/")
        }
        if (res.data && res.data.EC !== 0) {
            toast.error(res.data.EM)

        }
    }
    return (
        <div className="login-container">
            <div className="login-header ">
                <span>Dont Have an account yet?</span>
                <button className="btn-signup">Sign Up</button>
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
                    <button className="btn-submit" onClick={() => handleSubmitLogin()}>
                        Login to Answer
                    </button>

                </div>
                <div className="text-center">
                    <span className="back" onClick={() => navigate('/')}> &#60;&#60; Back to HomePage</span>
                </div>

            </div>

        </div>
    )
}

export default Login