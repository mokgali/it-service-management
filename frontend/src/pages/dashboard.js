import { useEffect,useState } from "react"
import SideMenu from "../components/sideMenu"
import ReportType from "../components/ReportType"
import ReportRange from "../components/ReportRange"
import ReportFilters from "../components/ReportFilters"
import StatisticsSummary from "../components/StatisticsSummary"
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
                var color='';
                if(data!==null && data.length>0)
                {data.forEach(dataElement=>{
                       if(element===dataElement.status){
                        totalForStatus++;
                       }                    
                })
                return{
                    name:element,
                    total:totalForStatus,
                    color:color
                }
            }
            });  
             setStatsTotals(dataByStatus); 
          }

        async function fetchTicketsForDateRange(){
        let todayDate= new Date();       
        if(selectedReportRange==="Past two weeks")
        {
        todayDate.setDate((todayDate.getDate()-14))
        }
        if(selectedReportRange==="This Month")
        {    
          todayDate =  getFirstDayOfMonth(todayDate.getFullYear(),todayDate.getMonth());
          
        }
        if(selectedReportRange==="Last Month")
        {
          todayDate=  getFirstDayOfMonth(todayDate.getFullYear(),todayDate.getMonth()-1);
          
        } 
        if(selectedReportRange==="This Year")
        {
          todayDate=  getFirstDayOfMonth(todayDate.getFullYear(),1);
          
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

      function getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1);
      }
      

return(
    <Container fluid  className={Styles.dashboard}> 
      <Row className={Styles.dashboardContainer}>
       <Col xs={2}><SideMenu/> </Col>
       <Col className={Styles.statsContainer} >
            <Row className={Styles.statsRangeBar} >
            <Col xs={6}> <h3>Ticket Statistics</h3></Col>
            <Col xs={6}><ReportRange onReportRangeSelection={handleReportRangeSelection}/></Col>    
            </Row>            
            {(data!==null||data!==null) && data.length>0? 
            <Row className={Styles.statsSummary}>
                <StatisticsSummary chartData={data}/>
            </Row>
            :<></>
            }
            {(data!==null||data!==null) && data.length>0? 
            <Row className={Styles.statsDetail}>
            <ReportBarChart chartData={data}/>                    
            </Row>    
            :<></>  
            }                    
        </Col>       
       </Row> 

   
  </Container>
  )
}
export default Dashboard