
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const isAuthenticated = useSelector(state => state.login.isAuthenticated)
    const account = useSelector(state => state.login.account)


    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login")
    }

    const handleRegister = () => {
        navigate('/register')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className='navbar-brand'>Question Web</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/users" className='nav-link' >User</NavLink>
                        <NavLink to="/admins" className='nav-link' >Admin</NavLink>
                    </Nav>
                    <Nav>
                        {isAuthenticated === false ?
                            <>
                                <Button className='btn-login' onClick={() => handleLogin()}> Login </Button>
                                <Button className='btn-signup' onClick={() => handleRegister()}>Sign Up</Button>
                            </>

                            :
                            <NavDropdown title="Setting" id="basic-nav-dropdown">
                                <NavDropdown.Item  onClick={() => handleLogin()} >Log Out</NavDropdown.Item>
                                <NavDropdown.Item>Log In </NavDropdown.Item>
                                <NavDropdown.Item >Profile</NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;