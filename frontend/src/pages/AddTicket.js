import { Form } from 'react-bootstrap';
import { Image} from 'react-bootstrap'
import { Button} from 'react-bootstrap'
import Styles from './AddTicket.module.css'
import { useState } from 'react';

function AddTicket(){
const [category,setCategory]=useState('');
const [urgencyLevel,setUrgencyLevel]=useState('');
const [description,setDescription]=useState('');
const username="khalele@gmail.com"	

function handleCategory(e){
  e.preventDefault();
   setCategory(e.target.value)  

}
function handleLevelOfUrgency(e){
  e.preventDefault();
  setUrgencyLevel(e.target.value)  
}
function handleRequestDescription(e){
  e.preventDefault();
  setDescription(e.target.value)  
}
async function addRequest(e){

  const creationDate= Date.now

  const response = await fetch("/requests",{
    method:'POST',
    headers:{
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({ 
      category:category,
      urgencyLevel: urgencyLevel,
      description:description,
      creationDate:creationDate,
      createdBy:username
    })
  });           


}

    return(
      <div >
      <Form className={Styles.AddTicket}>
      <Form.Group  controlId="RequestCategory" className="mb-3">
        <Form.Select aria-label="Default select example" onChange={e=>handleCategory(e)}>
        <option>Select Category</option>
        <option value="Software">Software</option>
        <option value="Hardware">Hardware</option>
        <option value="Other">Other</option>
       </Form.Select>
       </Form.Group>
       <Form.Group  controlId="RequestUrgency" className="mb-3">
        <Form.Select aria-label="Default select example" onChange={e=>handleLevelOfUrgency(e)}>
        <option>Select Urgency</option>
        <option value="Software">High</option>
        <option value="Hardware">Medium</option>
        <option value="Other">High</option>
       </Form.Select>
       </Form.Group>
        <Form.Group  controlId="RequestDescription" className="mb-3" >
          <Form.Label>Request Description</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={e=>handleRequestDescription(e)}/>
        </Form.Group>  
        <Form.Group  className="mb-3" >
        <Button variant="primary" className="float-end" onClick={addRequest}>Submit</Button>    
        </Form.Group>
      </Form>
      
       </div>  
    )  
  }
export default AddTicket;