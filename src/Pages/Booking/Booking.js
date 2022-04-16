import React from 'react';
import {useParams} from 'react-router-dom';
import usePlaces from '../../hooks/usePlaces';
import {Col, Container, Row} from 'react-bootstrap';
const Booking = () => {
    let {placeID} = useParams();
    const [places] = usePlaces([]);
    const selectedPlace = places.find(place => place.id == placeID);
    console.log(selectedPlace);
    return (
        <div>
            <Container>
                <h1>Book Your Next Destination</h1>
                <Row>
                    <Col xs={12} md={7} lg={7}>
                        
                    </Col>
                    <Col xs={12} md={7} lg={7}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;