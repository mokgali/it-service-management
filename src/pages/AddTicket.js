import { Form } from 'react-bootstrap';
import { Image} from 'react-bootstrap'
import { Button} from 'react-bootstrap'

function AddTicket(){
    return(
      <div className='AddTicket'>
      <Form >
        <Form.Select aria-label="Default select example">
        <option>Select Request Category</option>
        <option value="Software">Software</option>
        <option value="Hardware">Hardware</option>
        <option value="Other">Other</option>
       </Form.Select>
        <Form.Group  controlId="RequestDescription" margin-top="50px">
          <Form.Label>Request Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>      
      </Form>

       <Button variant="primary">Primary</Button>
       </div>  
    )  
  }
export default AddTicket;