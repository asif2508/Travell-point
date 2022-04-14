import { Button, FormControl, Navbar, Container, Nav, Form} from 'react-bootstrap';
import React from 'react';
import Image from 'react-bootstrap/Image'
import './Home.css';
import logo from '../../images/logo.png';
const Home = () => {
  return (
    <div className='home-style'>
      <Navbar expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand href="#">
              <Image style={{color: 'white'}} height={50} width={150} src={logo}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;