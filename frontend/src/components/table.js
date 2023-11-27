import { useState } from "react";
import TableOperations from "./tableOperations";
import { Table } from "react-bootstrap";

function TicketsTable({loggedTickets}){
    console.log(loggedTickets)
const [operatedOnData,setOperatedOnData]=useState(loggedTickets.map(loggedTicket=> loggedTicket))

function handleOperationChange(newData){
    //Update operated operatedOnData
    setOperatedOnData(newData)
  }

return(
    <>
     <TableOperations operatedOnData={operatedOnData} onOperationChange={handleOperationChange}/>
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
           {          
          operatedOnData.map((loggedTicket,index)=>
             <tr key={index}>
             <td >{loggedTicket.id}</td>
             <td>{loggedTicket.category}</td>
             <td>{loggedTicket.openingDate}</td>
             <td>{loggedTicket.status}</td>
             <td>{loggedTicket.closingDate}</td>
             <td>{loggedTicket.assignedTo}</td>
           </tr>
            )}    
           
          </tbody>
        </Table> 
        </>


)
}
export default TicketsTable;