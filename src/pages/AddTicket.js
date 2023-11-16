import { Form } from 'react-bootstrap';
import { Image} from 'react-bootstrap'
import { Button} from 'react-bootstrap'
import Styles from './AddTicket.module.css'

function AddTicket(){
    return(
      <div >
      <Form className={Styles.AddTicket}>
      <Form.Group  controlId="RequestCategory" className="mb-3">
        <Form.Select aria-label="Default select example">
        <option>Select Category</option>
        <option value="Software">Software</option>
        <option value="Hardware">Hardware</option>
        <option value="Other">Other</option>
       </Form.Select>
       </Form.Group>
       <Form.Group  controlId="RequestUrgency" className="mb-3">
        <Form.Select aria-label="Default select example">
        <option>Select Urgency</option>
        <option value="Software">High</option>
        <option value="Hardware">Medium</option>
        <option value="Other">High</option>
       </Form.Select>
       </Form.Group>
        <Form.Group  controlId="RequestDescription" className="mb-3" >
          <Form.Label>Request Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>  
        <Form.Group  className="mb-3" >
        <Button variant="primary" className="float-end">Submit</Button>    
        </Form.Group>
      </Form>
      
       </div>  
    )  
  }
export default AddTicket;