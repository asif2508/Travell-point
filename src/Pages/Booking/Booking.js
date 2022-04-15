import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import usePlaces from '../../hooks/usePlaces';
import Header from '../Header/Header';

const Booking = () => {
    let params = useParams();
    const [places, setPlace] = usePlaces(params.placeID);
    console.log(places);
    return (
        <div id='booking'>
            <Header></Header>
            <h1>hello</h1>
            <Container>
                <Row>
                    <Col xs={12} md={7} lg={7}>
                        <Card className="bg-dark text-white">
                            <Card.Img src="holder.js/100px270" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{ }</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col xs={12} md={7} lg={7}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;