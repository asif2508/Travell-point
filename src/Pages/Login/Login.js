import React from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import Header from '../Header/Header';
import './Login.css';
import Social from '../Social/Social';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <Container fluid className='login-page'>
                <div className='form-style mx-auto p-4'>
                    <h3>Login to Your Account</h3>
                    <form className=''>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        <button className='w-100 mt-3 login-btn' type="submit">Login</button>
                    </form>
                    <p className='text-start m-2'>Don't have an account?<Link to='/register'>Register</Link> </p>
                    <Social></Social>
                </div>
            </Container>
        </div>
    );
};

export default Login;