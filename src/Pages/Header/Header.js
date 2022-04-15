import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Group 2.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" variant='dark' className='header-style' id='home'>
          <Container>
            <Navbar.Brand href="#home">
              <Image height={90} width={150} src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="ms-auto my-2 my-lg-0">
                <Nav.Link className='link-style' as={Link} to="/" href='#home'>Home</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/booking" href='#booking'>Booking</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/places" href='#places'>Places</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/login" href='#login'>Login</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/register" href='#register'>Register</Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    );
};

export default Header;