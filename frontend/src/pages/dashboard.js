import { useEffect,useState } from "react"
import SideMenu from "../components/sideMenu"
import ReportType from "../components/ReportType"
import ReportRange from "../components/ReportRange"
import ReportFilters from "../components/ReportFilters"
import ReportBarChart from "../components/ReportBarChart"
import ReportPieChart from "../components/ReportPieChart"
import { Container,Row,Col } from "react-bootstrap"
import Styles from './dashboard.module.css'

function Dashboard(){

    const [data,setData]=useState('');
    const userName='khalele@gmail.com';
    const [queryDate,setQueryDate]= useState(new Date());
    const todayDate= new Date();
    todayDate.setDate((todayDate.getDate()-7))
    const [formattedDate] = todayDate.toISOString().split('T');
    const [totalOpenTickets,setTotalOpenTickets]=useState(0)
    const [totalPendingTickets,setTotalPendingTickets]=useState(0)
    const [totalClosedTickets,setTotalClosedTickets]=useState(0)
      

    useEffect(()=>{
        async function fetchLoggedRequests(){
        const url=`/tickets/${userName}/${formattedDate}`;
        const response = await fetch(url,{method:'GET'}); 
        const data = await response.json();    
        console.log(data)  
        setData(data)     
        }
          fetchLoggedRequests()        
      },[])

return(
    <Container fluid  className={Styles.dashboard}> 
      <Row className={Styles.dashboardContainer}>
       <Col xs={2}><SideMenu/> </Col>
       <Col className={Styles.ReportsCategory} >
            <Row >
            <Col xs={6}> <h3>Dashboard</h3></Col>
            <Col xs={6}><ReportRange/></Col>    
            </Row>  
            <Row>
            <Col>  <ReportFilters/></Col>
            </Row>
            <Row className={Styles.statsBar}>
            <Col className={Styles.statDiv}>
            {/* <img src="/open.jpg" className={Styles.statIcon} alt="open" /> */}
            <h5>Open Tickets</h5>    
            <h5>{totalOpenTickets}</h5>       
            </Col>
            <Col className={Styles.statDiv}>
            {/* <img src="/pending.jpg" className={Styles.statIcon} alt="pending" /> */}
             <h5>Pending Tickets</h5>
             <h5>{totalPendingTickets}</h5>
             </Col>
            <Col className={Styles.statDiv} >
            {/* <img src="/closed.jpg" className={Styles.statIcon}  alt="closed" /> */}
            <h5>Closed Tickets</h5>
            <h5>{totalClosedTickets}</h5>
            </Col>             
            </Row>
            {data!==null && data.length>0? 
            <Row>
            <Col><ReportBarChart chartData={data}/></Col>    
            <Col><ReportPieChart chartData={data}/></Col>          
            </Row>                                 
            :<></>
            }                   
            
       </Col>       
       </Row> 

   
  </Container>
  )
}
export default Dashboard