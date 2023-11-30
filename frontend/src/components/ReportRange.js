import { ButtonGroup,Button } from "react-bootstrap"

function ReportRange(){
   return( <ButtonGroup aria-label="Report Range">
    <Button variant="outline-primary">This Week</Button>
    <Button variant="outline-primary">Past two weeks</Button>
    <Button variant="outline-primary">This Month</Button>
    <Button variant="outline-primary">Last Month</Button>
    <Button variant="outline-primary">This Year</Button>
    <Button variant="outline-primary">Last Year</Button>
    </ButtonGroup> 
    )
}
export default  ReportRange