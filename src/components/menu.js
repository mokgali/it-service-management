import Link from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import { NavLink } from 'react-router-dom'

function Menu(){
    return (
    <div className="Menu">
{     <Nav defaultActiveKey="/"  className="justify-content-end">      
      <Nav.Item >
        <Nav.Link as={NavLink} to="/" className="App-link">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link as={NavLink} to="/loggedTickets" className="App-link">Logged Tickets</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link as={NavLink} to="/addTicket" className="App-link">Add Ticket</Nav.Link>
      </Nav.Item>
    </Nav> }
    </div>)
  }
  export default Menu
  