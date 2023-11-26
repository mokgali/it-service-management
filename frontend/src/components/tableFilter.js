import { Dropdown } from "react-bootstrap"

function TableFilter(){
  return(
    <Dropdown>
    <Dropdown.Toggle variant="info" id="dropdown-basic">
      Filter Tickets By:
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Closed</Dropdown.Item>     
      <Dropdown.Item href="#/action-3">Open</Dropdown.Item>    
      <Dropdown.Item href="#/action-3">Pending</Dropdown.Item> 
    </Dropdown.Menu>     
   </Dropdown>
  )
}
export default TableFilter