import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Styles from './Login.module.css'
import { useState } from 'react';



function Register() {

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [name,setName]= useState("");
  const [verifyPassword,setVerifyPassword]= useState("");


  async function handleRegister(e){
    e.preventDefault();
    console.log(email)
  
   
      const response = await fetch("/clients",{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify({ name:name,email: email})
      });           

  }
  
  function handleNameChange(e){
    e.preventDefault();
   setName(e.target.value)  
  } 

   function handleEmailChange(e){
    e.preventDefault();
   setEmail(e.target.value)  
   
  }
  function handlePasswordChange(e){
    e.preventDefault();  
    setPassword(e.target.value)  

  }
  function handleVerifyPasswordChange(e){
    e.preventDefault();  
    setPassword(e.target.value)  

  }


  return (
    <Form className={Styles.Login} onSubmit={(e=>handleRegister(e))}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control   onChange={e=>handleNameChange(e)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control   onChange={e=>handleEmailChange(e)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" onChange={e=>handlePasswordChange(e)}/>
        </Col>
      </Form.Group>
    {   <Form.Group as={Row} className="mb-3" controlId="formPlaintextVerifyPassword">
        <Form.Label column sm="5">
          Verify Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" onChange={e=>handleVerifyPasswordChange(e)}/>
        </Col>
      </Form.Group> }
      <Form.Group  className="mb-3" >
        <Button  className="float-end" size="lg" type="submit" onClick={(e=>handleRegister(e))}>Submit</Button>    
     </Form.Group>   
    </Form>       
  );
}

export default Register;