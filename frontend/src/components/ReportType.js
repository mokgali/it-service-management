import { ButtonGroup,Button } from "react-bootstrap"
function ReportType()
{
   return(
    <ButtonGroup aria-label="Report Types">
    <Button variant="secondary">Reports</Button>
    <Button variant="secondary">Summary</Button>
    <Button variant="secondary">Detailed</Button>
    <Button variant="secondary">Weekly</Button>
    </ButtonGroup> 
    
    )
   }

export default ReportType