import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import PageTitle from '../PageTitle/PageTitle';

const Signup = () => {
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [conpass,setConpass]=useState('')
    const [error,setError]=useState('')
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)
    const handleEmailblur=event=>{
        setEmail(event.target.value)
        }
    const handlePassblur=event=>{
        setPass(event.target.value)
        }
    const handleConpassblur=event=>{
        setConpass(event.target.value)
        }
        const navigate=useNavigate()
        if(user){
            navigate('/shop')
        }
    const handleSubmitbtn=event=>{
        event.preventDefault()
        if(pass!==conpass){
            setError('passwords didn\'t matched')
            return
        }
        else if(pass.length<6){
            setError('password length should be at least 6')
            return
        }
        else{
            setError('')
        }
        createUserWithEmailAndPassword(email,pass)
        
    }
    return (
        <div style={{margin:'5%'}}>
        <PageTitle title='signup page'></PageTitle>
            <Form className='container w-50 border rounded p-5' onSubmit={handleSubmitbtn}>
            <h2>Signup page</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailblur} type="email" placeholder="Enter email"  required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassblur} type="password" placeholder="Password"  required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control onBlur={handleConpassblur} type="password" placeholder="Confirm Password" required/>
  </Form.Group>
    <p style={{color:'red'}}>{error}</p>
  <Button variant="warning" type="submit">
    Submit
  </Button>
  <p className='mt-2'>Already have an account? <Link to="/login">Login</Link></p>
  <Button className='mt-3' variant="light" type="button">
    Sign in with google
  </Button>
</Form>
        </div>
    );
};

export default Signup;