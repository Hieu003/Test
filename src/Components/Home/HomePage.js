import { Button } from "react-bootstrap"
import videoHomePage from "../../asset/Video/Video-HomePage.mp4"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = (props) => {

    const isAuthenticated = useSelector(state => state.login.isAuthenticated)
    const navigate = useNavigate()
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomePage}
                    type="video/mp4"
                />
            </video>

            <div className="homepage-content">
                <div className="title-1">Make forms
                    worth filling out</div>
                <div className="title-2">Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
                <div className="title-3">
                    {isAuthenticated === false ?
                        <Button onClick={() => navigate(`/login`)}>Getting Started</Button>
                        :
                        <Button onClick={() => navigate(`/users`)}>Doing Quiz Now</Button>
                    }
                </div>

            </div>

        </div>
    )
}

export default HomePage