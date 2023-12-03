import { ButtonGroup,Button } from "react-bootstrap"
import { ResponsiveContainer,BarChart,Legend,Bar,Rectangle,CartesianGrid,XAxis,YAxis,Tooltip,Area } from "recharts";
function ReportBarChart({chartData}){

  const dataSortedByOpeningDate= chartData.sort((a,b)=>{return new Date(a.openingDate)-new Date(b.openingDate)})

  const stackedChartDataModel= dataSortedByOpeningDate.map(outerElement => {
    var closedTotal=0;
    var openTotal=0;
    var pendingTotal=0;

    dataSortedByOpeningDate.map(innerElement=>{
     if(outerElement.openingDate===innerElement.openingDate)
         if(innerElement.status==='Closed'){
          closedTotal++;
         }
         if(innerElement.status==='Open'){
          openTotal++;
         }
         if(innerElement.status==='Pending'){
          pendingTotal++;
         }
        })  
  return {
          name:outerElement.openingDate,
          Closed:closedTotal,
          Pending:pendingTotal,  
          Open:openTotal           
        } 
    
  });
 return (
 <ResponsiveContainer width="100%" height="60%">
 <BarChart
          width={500}
          height={300}
          data={stackedChartDataModel}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Closed" stackId="a" fill="green" />
          <Bar dataKey="Pending" stackId="a" fill="orange" />
          <Bar dataKey="Open" stackId="a" fill="red" />
        </BarChart>
</ResponsiveContainer> 

 )

}
export default ReportBarChart