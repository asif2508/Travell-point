import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import React from 'react';
import Image from 'react-bootstrap/Image'
import './Home.css';
import logo from '../../images/Group 2.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircleArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import usePlaces from '../../hooks/usePlaces';
import Place from '../Place/Place';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import PageTitle from '../PageTitle/PageTitle';
const Home = () => {
  const [places] = usePlaces();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const navigateToPlaces = () => {
    navigate('/places');
  }
  return (
    <div>
      <PageTitle title="home"></PageTitle>
      <header className='home-style'>
        <Navbar expand="lg" variant='dark' id='home'>
          <Container>
            <Navbar.Brand href="#home">
              <Image height={90} width={150} src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="ms-auto my-2 my-lg-0">
                <Nav.Link className='link-style' as={Link} to="/" href='#home'>Home</Nav.Link>
                <Nav.Link className='link-style' as={Link} to="/places">Places</Nav.Link>
                {user ? 
                <Nav.Link className='link-style' onClick={()=>signOut(auth)} as={Link} to="/home" href='#logout'>Signout</Nav.Link>
                :
                <Nav.Link className='link-style' as={Link} to="/login" href='#login'>Login</Nav.Link>
                }
                {user ?
                ''
                :
                <Nav.Link className='link-style' as={Link} to="/register" href='#register'>Register</Nav.Link>
                }
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
          <div className='main-container'>
            <h1 className='text-center mt-5 mb-3'>Places You might Like</h1>
            <div>
              <Row className='gy-5'>
                {
                  places.slice(0, 3).map(place => <Place
                    key={place.id}
                    place={place}
                  ></Place>)
                }
              </Row>
            </div>
            <button onClick={navigateToPlaces} className='explore mt-5'>Explore more <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;