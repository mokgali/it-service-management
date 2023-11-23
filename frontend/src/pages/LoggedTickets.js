import Table from 'react-bootstrap/Table';
import Styles from './LoggedTickets.module.css'
import { useEffect } from 'react';
import { useState } from 'react';



function LoggedTickets(){

    //Tickets that have been previously logged by the user
    const [loggedTickets,setLoggedTickets]=useState(null);
    const userName='khalele@gmail.com';
   
    useEffect(()=>{
      async function fetchLoggedRequests(){
      const url=`/tickets/${userName}`;
      const response = await fetch(url,{method:'GET'}); 
      const data = await response.json();      
      setLoggedTickets(data)
      //Update the state of logged tickets
        }
        fetchLoggedRequests()        
    },[])

      return (
      <div className={Styles.LoggedTickets}>
     <Table striped bordered hover variant="blue">
          <thead>
            <tr>
              <th>Reference Number</th>
              <th>Category</th>
              <th>Logged Date</th>
              <th>Status</th>
              <th>Closing Date</th>       
              <th>Contact Person</th>    
            </tr>
          </thead>
          <tbody>
    
          {loggedTickets!==null?loggedTickets.map(loggedTicket=>
             <tr>
             <td>{loggedTicket.id}</td>
             <td>{loggedTicket.category}</td>
             <td>{loggedTicket.openingDate}</td>
             <td>{loggedTicket.status}</td>
             <td>{loggedTicket.closingDate}</td>
             <td>{loggedTicket.assignedTo}</td>
           </tr>
            ):<></>}      
           
          </tbody>
        </Table> 
      </div>)
    }
    
export default LoggedTickets;