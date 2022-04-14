import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Group 2.png';
const Header = () => {
    return (
        <div>
            <Navbar expand="lg" variant='dark' bg='secondary' id='home'>
          <Container>
            <Navbar.Brand href="#home">
              <Image height={90} width={150} src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className='link-style' as={Link} to="/" href='#home'>Home</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/booking">Booking</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/contact">Contacts</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/login">Login</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/register">Register</Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    );
};

export default Header;