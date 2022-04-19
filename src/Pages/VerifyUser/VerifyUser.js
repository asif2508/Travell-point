import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './VerifyUser.css';
import { Button } from 'react-bootstrap';
const VerifyUser = () => {
    return (
        <div>
            <Header></Header>
            <div className='verify-page'>
                <h1 className='text-primary'>Verify Email has been sent!</h1>
                <Button className='bg-primary'></Button>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default VerifyUser;