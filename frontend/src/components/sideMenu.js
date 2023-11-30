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
        <Nav.Link as={NavLink} to="/dashboard" className="App-link"><img src="/dashboard.jpg" className={styles.navIcon} alt="dashboard" /> <span className={styles.navText}>Dashbord</span></Nav.Link>
      </Nav.Item>   
      <Nav.Item >
        <Nav.Link as={NavLink} to="/loggedTickets" className="App-link"><img src="/loggedTickets.jpg" className={styles.navIcon} alt="loggedTickets" /><span className={styles.navText}> Logged Tickets</span></Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link as={NavLink} to="/addTicket" className="App-link"><img src="/addTicket.jpg" className={styles.navIcon} alt="addTicket" /><span className={styles.navText}>Capture Ticket</span></Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    
    
    
    
    
    )
  }
  export default SideMenu
  