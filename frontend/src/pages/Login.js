import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Styles from './Login.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const navigate=useNavigate();


  function handleEmailChange(e){
    e.preventDefault();
   setEmail(e.target.value)  
   
  }
  function handlePasswordChange(e){
    e.preventDefault();  
    setPassword(e.target.value)  

  }

  async function handleLogin(e){
    e.preventDefault();   
    const url=`/clients/${email}`;
    const response = await fetch(url,{method:'GET'});  
    if(response.status){
     navigate('/loggedTickets')
    }


  }
  return (
    <Form className={Styles.Login}>
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
      <Form.Group  className="mb-3" >
        <Button  className="float-end" size="lg" onClick={(e=>handleLogin(e))}>Submit</Button>    
     </Form.Group>   
    </Form>       
  );
}

export default Login;