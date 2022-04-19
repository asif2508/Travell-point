import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {  faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Social.css';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const Social = (handleSignInWithTwitter, handleSignInWithGoogle, handleSignInWithFacebook, loading3, loading1, loading2) => {
    
    if (loading3 || loading1 || loading2) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex mt-3 align-items-center justify-content-center mb-3'>
                <div className='line-style'></div><div className='ms-1 me-1 fw-bold'>Or sign in with</div><div className='line-style'></div>
            </div>
            <div className='d-flex justify-content-around'>
                <div><FontAwesomeIcon onClick={handleSignInWithGoogle}  className='fs-5 logo-backgound' icon={faGoogle}></FontAwesomeIcon> </div>
                <div><FontAwesomeIcon  onClick={handleSignInWithFacebook}className='fs-5 logo-backgound' icon={faFacebook}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon  onClick={handleSignInWithTwitter} className='fs-5 logo-backgound' icon={faTwitter}></FontAwesomeIcon></div>
            </div>
        </div>
    );
};

export default Social;