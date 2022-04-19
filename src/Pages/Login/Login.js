import React from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import Header from '../Header/Header';
import './Login.css';
import Social from '../Social/Social';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [signInWithGoogle, loading3] = useSignInWithGoogle(auth);
    const [signInWithTwitter, loading1] = useSignInWithTwitter(auth);
    const [signInWithFacebook, loading2] = useSignInWithFacebook(auth);
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (loading) {
    return <Loading></Loading>
    }
    const handlesignIn = async event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email,password);
        if (user) {
            navigate(from, { replace: true });
        }
    }
    if(user){
        navigate(from, { replace: true });
    }
    const handleSignInWithGoogle =()=>{
        signInWithGoogle();
    }
    const handleSignInWithFacebook =()=>{
        signInWithFacebook();
        
    }
    const handleSignInWithTwitter =()=>{
        signInWithTwitter();
        
    }
    return (
        <div>
            <Header></Header>
            <PageTitle title="Login"></PageTitle>
            <Container fluid className='login-page'>
                <div className='form-style mx-auto p-4'>
                    <h3>Login to Your Account</h3>
                    <form onSubmit={handlesignIn}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" name='email' placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" name='password' placeholder="Password" />

                        </FloatingLabel>
                        {error && <p className='text-danger mt-1 mb-0'>{error.message}</p>}
                        <button className='w-100 mt-3 login-btn' type="submit">Login</button>
                    </form>
                    <p className='text-start m-2'>Don't have an account?<Link className='text-primary ms-1 fw-bold' to='/register'>Register</Link> </p>
                    <Social 
                    handleSignInWithGoogle ={handleSignInWithGoogle}
                    handleSignInWithFacebook ={handleSignInWithFacebook}
                    handleSignInWithTwitter = {handleSignInWithTwitter}
                    loading1 = {loading1}
                    loading2 = {loading2}
                    loading3 = {loading3}
                    ></Social>
                </div>
            </Container>
        </div>
    );
};

export default Login;