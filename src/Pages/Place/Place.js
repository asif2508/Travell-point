import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Place.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Booking from '../Booking/Booking';
const Place = (props) => {
    const {id, name, img, city, country, desc, rating } = props.place;
    const navigate = useNavigate();
    return (
        <Col xs={12} md={4} lg={4}>
            <Card className='card-style'>
                <Card.Img variant="top" src={img} height={230} width={180} />
                <Card.Body>
                    <h6 className='text-start'>{name}</h6>
                    <p className='text-start para-city'><small><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><span className='ms-1'>{city}, {country}</span></small></p>
                    <p className='text-start break-word para-style'>{desc.length > 200 ? desc.slice(0, 220) + '...' : desc}</p>
                    {rating >= 3 && rating < 4 &&
                        <p className='text-start'>
                            
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </p>
                    }
                    {rating >= 4 && rating < 5 &&
                        <p className='text-start'>
                            
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </p>
                    }
                    {rating === 5 &&
                        <p className='text-start'>
                            
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star-color' icon={faStar}></FontAwesomeIcon>
                        </p>
                    }
                    <button onClick={()=>navigate(`/booking/${id}`)} className='book-now'>Book Now</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Place;