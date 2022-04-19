import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './VerifyUser.css';
import { Button } from 'react-bootstrap';
const VerifyUser = ({sendEmailVerification}) => {
    return (
        <div>
            <Header></Header>
            <div className='verify-page'>
                <h1 className='text-primary'>Verify Email has been sent!</h1>
                <h3 className='text-secondary'>Please verify your account in order to booking</h3>
                <Button onClick={sendEmailVerification} className='bg-primary'>Sent verification email again!</Button>

            </div>
        </div>
    );
};

export default VerifyUser;