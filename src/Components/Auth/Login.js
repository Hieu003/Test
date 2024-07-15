import { useState } from "react"
import ".//Login.scss"

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmitLogin = () => {
        alert("login")
    }
    return (
        <div className="login-container">
            <div className="login-header ">
                Dont Have an account yet?
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
            </div>

        </div>
    )
}

export default Login