import Table from 'react-bootstrap/Table';
import Styles from './LoggedTickets.module.css'
import Operations from '../components/tableOperations';
import { useEffect } from 'react';
import { useState } from 'react';
import TableOperations from '../components/tableOperations';
import TicketsTable from '../components/table';

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
    <div className={Styles.LoggedTickets}>
     {loggedTickets!==null && loggedTickets.length>0?<TicketsTable loggedTickets={loggedTickets}/>:<></>}         
    </div>)
    }
    
export default LoggedTickets;