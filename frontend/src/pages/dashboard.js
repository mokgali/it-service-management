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
    const selectedFilter= useState('This Week');    
    const [statsTotals,setStatsTotals]=useState([{name:"Open",total:0},{name:"Pending",total:0},{name:"Closed",total:0}])
     
     useEffect(()=>{
        async function fetchTicketsForDateRange(){
        const url=`/tickets/${userName}/${formattedDate}`;
        const response = await fetch(url,{method:'GET'}); 
        const responseData = await response.json();          
        setData(data=>responseData);   
        console.log(data) 
        if(data){    
        generateGenericTotalsFromData() 
        }       
        }
        fetchTicketsForDateRange()        
      })

      function generateGenericTotalsFromData(){
        const dataByStatus= ["Open","Pending","Closed"].map(element => {
            var totalForStatus=0;
            data.forEach(dataElement=>{
                   if(element===dataElement.status){
                    totalForStatus++;
                   }
            })
            return{
                name:element,
                total:totalForStatus
            }
        });  
         setStatsTotals(dataByStatus); 
      }

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

             {statsTotals.map(statsTotalObject=>{
                  return (<Col className={Styles.statDiv} >
                   <h5>{statsTotalObject.name} Tickets</h5>    
                   <h5>{statsTotalObject.total} </h5>       
                   </Col>
                  )
                  }
                )}                       
            </Row>
            {data!==null && data.length>0? 
            <Row>
            <Col><ReportBarChart chartData={data}/></Col>    
            <Col><ReportPieChart chartData={statsTotals}/></Col>          
            </Row>                                 
            :<></>
            }                   
            
       </Col>       
       </Row> 

   
  </Container>
  )
}
export default Dashboard