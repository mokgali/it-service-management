import { Dropdown } from "react-bootstrap"
import styles from "./tableFilter.module.css"

function TableFilter(){
  return(
    <>
    <Dropdown className={styles.filterItem}>
    <Dropdown.Toggle variant="info" id="dropdown-basic">
      Status:
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Closed</Dropdown.Item>     
      <Dropdown.Item href="#/action-3">Open</Dropdown.Item>    
      <Dropdown.Item href="#/action-3">Pending</Dropdown.Item> 
    </Dropdown.Menu>     
   </Dropdown>
    <Dropdown className={styles.filterItem}>
    <Dropdown.Toggle variant="info" id="dropdown-basic">
      Category:
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Software</Dropdown.Item>     
      <Dropdown.Item href="#/action-3">Hardware</Dropdown.Item>    
      <Dropdown.Item href="#/action-3">Other</Dropdown.Item> 
    </Dropdown.Menu>     
   </Dropdown>
   </>
  )
}
export default TableFilter