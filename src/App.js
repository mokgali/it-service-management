import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';
import { ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function App() {
  return (
  <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
        <span>IT Service Management System</span>
      </header> 
   </div>
             
      <Container fluid>      
      <Row>
        <Col xxl={3} ><Menu ></Menu></Col>
        <Col xxl={8}><TicketsContent></TicketsContent> </Col>
      </Row> 
      </Container>
   </div>
      
  );
}

function Menu(){
  return (<div className="Menu">
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Logged Tickets
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
        Create New Tickets
      </ListGroup.Item>
      <ListGroup.Item  action href="#link3">
        Statistics
      </ListGroup.Item>
    </ListGroup>
  </div>)
}
function TicketsContent(){

//Tickets that have been previously logged by the user
const loggedTickets=[
{
number:"12354PX",
loggedDate:"2022-12-10",
ticketStatus:"In Progress",
closingDate:"",
contactPerson:"Larry Cooper"
},
{
  number:"12354PL",
  loggedDate:"2023-04-15",
  ticketStatus:"In Progress",
  closingDate:"",
  contactPerson:"Emmanuel Koki"
  },
  {
    number:"12355LP",
    loggedDate:"2023-02-11",
    ticketStatus:"In Progress",
    closingDate:"",
    contactPerson:"Thabo Smith"
    }
  

]
  return (
  <div className="TicketsContent">
 <Table striped bordered hover variant="blue">
      <thead>
        <tr>
          <th>Reference Number</th>
          <th>Logged Date</th>
          <th>Status</th>
          <th>Closing Date</th>       
          <th>Contact Person</th>    
        </tr>
      </thead>
      <tbody>

      {loggedTickets.map(loggedTicket=>
         <tr>
         <td>{loggedTicket.number}</td>
         <td>{loggedTicket.loggedDate}</td>
         <td>{loggedTicket.ticketStatus}</td>
         <td>{loggedTicket.closingDate}</td>
         <td>{loggedTicket.contactPerson}</td>
       </tr>
        )}      
       
      </tbody>
    </Table> 
  </div>)
}
export default App;
