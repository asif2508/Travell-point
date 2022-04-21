import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer d-flex justify-content-between align-items-center p-5 flex-wrap">
                    <div class="name text-start p-3">
                        <h3 class="footer-heading">LUXURY</h3>
                        <p class="ms-5 lh-1"><small>HOTELS</small></p>
                        <h6 class="address">
                            <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                            <span>497 Evergreen Rd. Roseville, CA 95673</span>
                        </h6>
                        <h6 class="address">
                            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                            <a href="tel:+44 345 678 903">+44 345 678 903</a>
                        </h6>
                        <h6 class="address">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            <a href="mailto:rakibul4210@gmail.com">luxury_hotels@gmail.com</a>
                        </h6>
                    </div>
                    <div class="links p-3 text-start">
                        <h6 class="address">
                            <a href="#">About Us</a>
                        </h6>
                        <h6 class="address">
                            <a href="#">Contact</a>
                        </h6>
                        <h6 class="address">
                            <a href="#">Terms & Conditions</a>
                        </h6>
                    </div>
                    <div class="social p-3 text-start">
                        <h6 class="address">
                            <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                            <a href="https://www.facebook.com">Facebook</a>
                        </h6>
                        <h6 class="address">
                            <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
                            <a href="https://www.twitter.com">Twitter</a>
                        </h6>
                        <h6 class="address">
                            <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
                            <a href="https://www.instagram.com">Instagram</a>
                        </h6>
                    </div>
                    <div class="email p-3">
                        <h6 class="address">
                            <a href="#">Subscribe to our newsletter</a>
                        </h6>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="email"
                                aria-label="email"
                                className="input-box"
                            />
                            <Button className="sub-btn" id="button-addon2">
                                Send
                            </Button>
                        </InputGroup>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;