import Link from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import { NavLink } from 'react-router-dom'
import styles from "./sideMenu.module.css"

function SideMenu(){
    return (
/*     <div className={styles.sideMenu}>
{     <Nav defaultActiveKey="/"  className="flex-column">      
      <Nav.Item >
        <Nav.Link as={NavLink} to="/" className="App-link">Logged Tickets</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link as={NavLink} to="/register" className="App-link">Reports</Nav.Link>
      </Nav.Item>     
    </Nav> }
    </div> */
    
    <div className={styles.sideMenu}>
    <Nav defaultActiveKey="/"  className="flex-column">  
       <Nav.Item >
        <Nav.Link as={NavLink} to="/dashboard" className="App-link">DASHBOARD</Nav.Link>
      </Nav.Item>   
      <Nav.Item >
        <Nav.Link as={NavLink} to="/loggedTickets" className="App-link">LOGGED TICKETS</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link as={NavLink} to="/addTicket" className="App-link">ADD TICKET</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    
    
    
    
    
    )
  }
  export default SideMenu
  