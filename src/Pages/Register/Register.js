import React from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Social from '../Social/Social';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const navigate = useNavigate()
    const [signInWithGoogle, loading3] = useSignInWithGoogle(auth);
    const [signInWithTwitter, loading1] = useSignInWithTwitter(auth);
    const [signInWithFacebook, loading2] = useSignInWithFacebook(auth);

    if (loading || updating) {
        return <Loading></Loading>
    }
    if(user){
        navigate('/home');
    }

    const handleCreateUser = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if(!user){
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            await sendEmailVerification();
        }
    if (user) {
        navigate('/home');
    }
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
        <div id='register' >
            <Header></Header>
            <PageTitle title="Register"></PageTitle>
            <Container fluid className='register-page'>
                <div className='register-style mx-auto p-4'>
                    <h3>Create a New Account</h3>
                    <form onSubmit={handleCreateUser}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3">
                            <Form.Control type="name" name='name' placeholder="Your Name" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" name='email' placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </FloatingLabel>
                        {error && <p className='text-danger mb-0'>{error.message}</p>}
                        
                        <button className='w-100 mt-3 login-btn' type="submit">Register</button>
                    </form>
                    <p className='text-start m-2'>Already have an account?<Link className='text-primary ms-1 fw-bold' to='/login'>Login</Link> </p>
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

export default Register;