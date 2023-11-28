import Link from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import { NavLink } from 'react-router-dom'
import styles from "./sideMenu.module.css"

function SideMenu(){
    return (
    <div className={styles.sideMenu}>
{     <Nav defaultActiveKey="/"  className="flex-column">      
      <Nav.Item >
        <Nav.Link as={NavLink} to="/" className="App-link">Logged Tickets</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link as={NavLink} to="/register" className="App-link">Reports</Nav.Link>
      </Nav.Item>     
    </Nav> }
    </div>)
  }
  export default SideMenu
  