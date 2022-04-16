import React, { useState } from 'react';
import './Login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [error,setError]=useState('')
    const handleEmailblur=event=>{
        setEmail(event.target.value)
        }
    const handlePassblur=event=>{
        setPass(event.target.value)
        }
    const handleSubmitbtn=event=>{
        event.preventDefault()
    }
    return (
        <div style={{margin:'5%'}}>
            <Form className='container w-50 border rounded p-5'>
            <h2>Login page</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmitbtn}>
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailblur} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassblur} type="password" placeholder="Password"  required/>
  </Form.Group>
  <Button variant="warning" type="button">
    Submit
  </Button>
  <p className='mt-2'>New to Ema-john? <Link to="/signup">Create an acoount</Link></p>
  <div className='orsec'>
  <hr></hr>
  <p>or</p>
  <hr></hr>
  </div>
  <Button className='mt-3' variant="light" type="button">
    Sign in with google
  </Button>
</Form>
        </div>
    );
};

export default Login;