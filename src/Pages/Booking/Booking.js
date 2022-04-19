import React from 'react';
import { useParams } from 'react-router-dom';
import usePlaces from '../../hooks/usePlaces';
import { Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Booking .css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../PageTitle/PageTitle';
const Booking = () => {
    let { placeID } = useParams();
    const [places] = usePlaces([]);
    const [user] = useAuthState(auth);
    const selectedPlace = places.find(place => place.id == placeID);
    let paymentId = Math.floor(Math.random() * 10000);
    return (
        <div>
            <Header></Header>
            <PageTitle title="Booking"></PageTitle>
            <Container fluid className='mb-5 mt-5'>
                
                <Row>
                    <Col xs={12} md={7} lg={7}>
                        <Card className="bg-dark text-white card">
                            <Card.Img src={selectedPlace?.img} height='571px' alt="Card image" />
                            <Card.ImgOverlay className='card-bdy'>
                                <Card.Title>{selectedPlace?.name}</Card.Title>
                                <Card.Text>
                                    {selectedPlace?.desc}
                                </Card.Text>
                                <Card.Text>{selectedPlace?.city}, {selectedPlace?.country}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col xs={12} md={5} lg={5}>
                        <div className="payment-style">
                            <h5>Pay for your trip</h5>
                            <Form>
                                <p>Payment Id</p>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label={paymentId}
                                    className="mb-3">
                                    <Form.Control type="name" name='name' placeholder="Your Name" disabled />
                                </FloatingLabel>

                                <p>Name</p>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label={user?.displayName}
                                    className="mb-3">
                                    <Form.Control type="name" name='name' placeholder="Your Name" disabled />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Card Number"
                                    className="mb-3">
                                    <Form.Control type="name" name='name' placeholder="Card Number" required/>
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Region"
                                    className="mb-3">
                                    <Form.Control type="name" name='name' placeholder="Region"  required />
                                </FloatingLabel>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <p>City</p>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <p>State</p>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <p>Zip</p>
                
                                        <Form.Control />
                                    </Form.Group>
                                </Row>
                                <button className='book-now ps-3 pe-3 pt-2 pb-2' type="submit">Checkout</button>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;