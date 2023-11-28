import { ButtonGroup,Button } from "react-bootstrap"

function ReportRange(){
   return( <ButtonGroup aria-label="Report Range">
    <Button variant="secondary">This Week</Button>
    <Button variant="secondary">Past two weeks</Button>
    <Button variant="secondary">This Month</Button>
    <Button variant="secondary">Last Month</Button>
    <Button variant="secondary">This Year</Button>
    <Button variant="secondary">Last Year</Button>
    </ButtonGroup> 
    )
}
export default  ReportRange