import React, { useState } from 'react';
import './Login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../firebase.init'; 
 import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../PageTitle/PageTitle';
const Login = () => {
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    }
    const handleEmailblur=event=>{
        setEmail(event.target.value)
        }
    const handlePassblur=event=>{
        setPass(event.target.value)
        }
    const handleSubmitbtn=event=>{
        event.preventDefault()
        signInWithEmailAndPassword(email,pass)
    }
    const notify = () => toast("Wow so easy !");
    return (
        <div style={{margin:'5%'}}>
        <PageTitle title='login'></PageTitle>
            <Form className='container w-50 border rounded p-5' onSubmit={handleSubmitbtn}>
            <h2>Login page</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailblur} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassblur} type="password" placeholder="Password"  required/>
  </Form.Group>
  {
      loading&&<div class="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  }
  <Button variant="warning" type="submit">
    Submit
  </Button>
    <p style={{color:'red'}}>{error?.message}</p>
  <p className='mt-2'>New to Ema-john? <Link to="/signup">Create an acoount</Link></p>
  <div className='orsec'>
  <hr></hr>
  <p>or</p>
  <hr></hr>
  </div>
  <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
  <Button className='mt-3' variant="light" type="button">
    Sign in with google
  </Button>
</Form>
        </div>
    );
};

export default Login;