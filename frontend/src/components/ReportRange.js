import { ButtonGroup,Button } from "react-bootstrap"
import { useState } from "react";

function ReportRange({onReportRangeSelection}){
    //const [selectedQueryRange,setSelectedQueryRange]= useState('');

    function handleQuerySelection(e){
        //setSelectedQueryRange(selectedQueryRange=>e.targetElement.value)
        //Create the cutoff date for which we want to query by
        onReportRangeSelection(e.target.value)

    }

   return( <ButtonGroup aria-label="Report Range">
    <Button variant="outline-primary" value="This Week" onClick={e=>handleQuerySelection(e)}>This Week</Button>
    <Button variant="outline-primary" value="Past two weeks" onClick={e=>handleQuerySelection(e)}>Past two weeks</Button>
    <Button variant="outline-primary" value="This Month" onClick={e=>handleQuerySelection(e)}>This Month</Button>
    <Button variant="outline-primary" value="Last Month" onClick={e=>handleQuerySelection(e)}>Last Month</Button>
    <Button variant="outline-primary" value="This Year" onClick={e=>handleQuerySelection(e)}>This Year</Button>
    <Button variant="outline-primary" value="Last Year" onClick={e=>handleQuerySelection(e)}>Last Year</Button>
    </ButtonGroup> 
    )
}
export default  ReportRange