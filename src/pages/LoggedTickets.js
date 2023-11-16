import Table from 'react-bootstrap/Table';
import Styles from './LoggedTickets.module.css'

function LoggedTickets(){

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
      <div className={Styles.LoggedTickets}>
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
    
export default LoggedTickets;