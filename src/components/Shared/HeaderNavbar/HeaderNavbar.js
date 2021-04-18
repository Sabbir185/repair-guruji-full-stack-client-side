import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo1.png';
import './HeaderNavbar.css'


const HeaderNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                <Navbar.Brand> <Link to='/' className='navbar-brand'> <img src={logo} alt="" className="img-fluid" style={{height:'100px'}}/> </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto link-style">
                        <Link to='/' className='nav-link mr-3'>Home</Link>
                        <Link to='/dashboard' className='nav-link mr-3'>Dashboard</Link>
                        <Link to='/about' className='nav-link mr-3'>About Us</Link>
                        {   
                            loggedInUser.email 
                            ?
                            <Link to="/" className='nav-link mr-3'>{loggedInUser.name}</Link>
                            :
                            <Link to='/login' className='nav-link mr-3'>Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;