import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Group 2.png';
import './Header.css';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar expand="lg" variant='dark' className='header-style' id='home'>
          <Container>
            <Navbar.Brand href="#home">
              <Image className='header-img' height={90} width={150} src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="ms-auto my-2 my-lg-0">
                <Nav.Link className='link-style' as={CustomLink} to="/" href='#home'>Home</Nav.Link>
                <Nav.Link className='link-style' as={CustomLink} to="/places" href='#places'>Places</Nav.Link>
                {user ? 
                <Nav.Link className='link-style' onClick={()=>signOut(auth)} as={CustomLink} to="/home" href='#logout'>Signout</Nav.Link>
                :
                <Nav.Link className='link-style' as={CustomLink} to="/login" href='#login'>Login</Nav.Link>
                }
                {user ?
                ''
                :
                <Nav.Link className='link-style' as={CustomLink} to="/register" href='#register'>Register</Nav.Link>
                }
                
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    );
};

export default Header;