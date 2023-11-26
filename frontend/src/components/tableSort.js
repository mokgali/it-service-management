import { Form,Dropdown } from "react-bootstrap"
import styles from "./tableSort.module.css"

function TableSort(){
  return(
    <>
    <Form className={styles.sortItem}>
    <Form.Check // prettier-ignore
      type="switch"
      id="custom-switch"
      label="Sort Criteria (A-Z)"
    />         
  </Form>
  <Dropdown className={styles.sortItem}>
    <Dropdown.Toggle variant="info" id="dropdown-basic">
      Sort Tickets By:
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Status</Dropdown.Item>     
      <Dropdown.Item href="#/action-3">Category</Dropdown.Item>    
      <Dropdown.Item href="#/action-3">Opening Date</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Closing Date</Dropdown.Item>
    </Dropdown.Menu>     
  </Dropdown> 
  </>
  )
}
export default TableSort