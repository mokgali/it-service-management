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
    <Row>
     <Col xs={6}> <ReportType/></Col>
     <Col xs={6}><ReportRange/>   </Col>    
    </Row>  
    <Row>
     <Col>  <ReportFilters/></Col>
    </Row>  
    <Row>
     <Col>  <ReportBarChart/></Col>  
     <Col>  <ReportPieChart/></Col>  
    </Row>      
  </Container>
  )
}
export default dashboard