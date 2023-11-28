import SideMenu from "../components/sideMenu"
import ReportType from "../components/ReportType"
import ReportRange from "../components/ReportRange"
import ReportFilters from "../components/ReportFilters"
import ReportBarChart from "../components/ReportBarChart"
import ReportPieChart from "../components/ReportPieChart"
import { Container,Row,Col } from "react-bootstrap"
import Styles from './dashboard.module.css'

function dashboard(){
return(
    <Container fluid  className={Styles.dashboard}> 
      <Row className={Styles.dashboardContainer}>
       <Col xs={2}><SideMenu/> </Col>
       <Col className={Styles.ReportsCategory} >
            <Row >
            <Col xs={6}> <ReportType/></Col>
            <Col xs={6}><ReportRange/></Col>    
            </Row>  
            <Row>
            <Col>  <ReportFilters/></Col>
            </Row>  
            <Row>
            <Col>  <ReportPieChart/></Col>  
            <Col>  <ReportBarChart/></Col>
            </Row>      
       </Col>       
       </Row> 

   
  </Container>
  )
}
export default dashboard