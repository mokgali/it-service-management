import {Table,Container,Row,Col} from 'react-bootstrap';
import Styles from './LoggedTickets.module.css'
import Operations from '../components/tableOperations';
import { useEffect } from 'react';
import { useState } from 'react';
import TableOperations from '../components/tableOperations';
import TicketsTable from '../components/table';
import SideMenu from '../components/sideMenu';

function LoggedTickets(){

    //Tickets that have been previously logged by the user
    const [loggedTickets,setLoggedTickets]=useState(null);
    const userName='khalele@gmail.com';
   
    useEffect(()=>{
      async function fetchLoggedRequests(){
      const url=`/tickets/${userName}`;
      const response = await fetch(url,{method:'GET'}); 
      const data = await response.json();    
      console.log(data)  
      setLoggedTickets(data)     
      }
        fetchLoggedRequests()        
    },[])

    return (     
    <Container fluid className={Styles.LoggedTickets}>      
      <Row>
       {/* <Col xs={2}><SideMenu/> </Col> */}
       <Col >
        <div >     
        {loggedTickets!==null && loggedTickets.length>0?<TicketsTable loggedTickets={loggedTickets}/>:<></>}         
        </div>
       </Col>       
    </Row>      
    </Container>
    )
}
    
export default LoggedTickets;