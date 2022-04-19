import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import VerifyUser from '../VerifyUser/VerifyUser';

const RequiredAuth = ({ children }) =>{
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
    if(loading){
        return <Loading></Loading>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(!user.emailVerified){
        return <VerifyUser sendEmailVerification={sendEmailVerification}></VerifyUser>
    }
    return children;
}

export default RequiredAuth;