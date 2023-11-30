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

    const [data,setData]=useState(null);
    const userName='khalele@gmail.com';    
    const [selectedReportRange,setSelectedReportRange]= useState('This Week');    
    const [statsTotals,setStatsTotals]=useState([{name:"Open",total:0},{name:"Pending",total:0},{name:"Closed",total:0}])
      
     useEffect(()=>{
  
        function generateGenericTotalsFromData(){
            const dataByStatus= ["Open","Pending","Closed"].map(element => {
                var totalForStatus=0;
                if(data!==null && data.length>0)
                {data.forEach(dataElement=>{
                       if(element===dataElement.status){
                        totalForStatus++;
                       }
                })
                return{
                    name:element,
                    total:totalForStatus
                }
            }
            });  
             setStatsTotals(dataByStatus); 
          }
          
        async function fetchTicketsForDateRange(){
        const todayDate= new Date();
        todayDate.setDate((todayDate.getDate()-7))
        if(selectedReportRange==="Past two weeks")
        {
        todayDate.setDate((todayDate.getDate()-14))
        }
        if(selectedReportRange==="This Month")
        {
        todayDate.setDate((todayDate.getDate()-30))
        }
        if(selectedReportRange==="Last Month")
        {
        todayDate.setDate((todayDate.getDate()-30))
        }        
        const [formattedDate] = todayDate.toISOString().split('T');

        const url=`/tickets/${userName}/${formattedDate}`;
        const response = await fetch(url,{method:'GET'}); 
        const responseData = await response.json();          
        setData(responseData);          
        }   
        fetchTicketsForDateRange();   
        generateGenericTotalsFromData();      
      },[selectedReportRange]);      

      function handleReportRangeSelection(selectedReportRange){ 
        setSelectedReportRange(e=>selectedReportRange);
      }

return(
    <Container fluid  className={Styles.dashboard}> 
      <Row className={Styles.dashboardContainer}>
       <Col xs={2}><SideMenu/> </Col>
       <Col className={Styles.ReportsCategory} >
            <Row >
            <Col xs={6}> <h3>Dashboard</h3></Col>
            <Col xs={6}><ReportRange onReportRangeSelection={handleReportRangeSelection}/></Col>    
            </Row>  
            <Row>
            <Col>  <ReportFilters/></Col>
            </Row>
     {/*        <Row className={Styles.statsBar}>
             {statsTotals!==null && statsTotals.length>0? statsTotals.map(statsTotalObject=>{
                  return (<Col className={Styles.statDiv} key={statsTotalObject.name}>
                   <h5>{statsTotalObject.name} Tickets</h5>    
                   <h5>{statsTotalObject.total} </h5>       
                   </Col>
                  )
                  }
                ):<></>}                       
            </Row> */}
            {(data!==null||data!==null) && data.length>0? 
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