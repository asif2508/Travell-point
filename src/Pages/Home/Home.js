import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import React from 'react';
import Image from 'react-bootstrap/Image'
import './Home.css';
import logo from '../../images/Group 2.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarCheck, faCircleArrowDown} from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  return (
    <div>
      <header  className='home-style'>
        <Navbar expand="lg" variant='dark' id='home'>
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
                <Nav.Link className='link-style' as={Link} to="/contacts">Contacts</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/login">Login</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/register">Register</Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* intro */}
        <Container>
          <div className="d-flex flex-column justify-content-start align-items-start flex-wrap banner">
            <p className="header-para lh-1">WELCOME TO</p>
            <h1 className="header-head lh-1">LUXURY</h1>
            <h3 className="header-sub-head lh-1">HOTELS</h3>
            <p className="sub-para line-dis">Book your stay and enjoy Luxury</p>
            <p className="sub-para line-dis">redefined at the most affordable rates.</p>
          </div>

          <div className="d-flex justify-content-center align-items-center flex-column">
            <p><Link to="/places" className="book-btn">
              <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon>
              <span className='ms-2'>BOOK NOW</span>
            </Link></p>
            <div className="scroller d-flex justify-content-center align-items-center flex-column">
              <p className="scroll">Scroll</p>
              <p className="scroll"><a href="#main-place"> <FontAwesomeIcon icon={faCircleArrowDown}></FontAwesomeIcon></a></p>
            </div>
          </div>
        </Container>
      </header>
      <main id='main-place'>
        <Container>
          <h1 className='text-center mt-5'>Places You might Like</h1>
          <div>
              <Row>
                
              </Row>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;