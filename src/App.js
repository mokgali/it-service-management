import logo from './logo.svg';
import './App.css';
import AddTicket from './pages/AddTicket';
import LoggedTickets from './pages/LoggedTickets';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nav  from 'react-bootstrap/Nav';
import NavItem  from 'react-bootstrap/NavItem';

import { ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes,Route, Link} from 'react-router-dom';
import Menu from './components/menu';



function App() {
  
  return( 
  <>
  
 
  <BrowserRouter>
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />   
    <span>IT Service Management System</span>
    <Menu></Menu>
  </header>  
  <Routes>
    <Route path="/" element={<LoggedTickets/>}></Route>
    <Route path="addTicket" element={<AddTicket/>}></Route>
    <Route path="loggedTickets" element={<LoggedTickets/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}




export default App;
