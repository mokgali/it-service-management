import {PieChart,Pie,Cell} from 'recharts'

/* const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ]; */

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
     <> 
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      </>  
    );
  };

function ReportPieChart({chartData}){

      const data= ["Pending", "Closed"].map(element => {
        var totalForStatus=0;
        chartData.forEach(dataElement=>{
               if(element===dataElement.status){
                totalForStatus++;
               }
        })
        return{
            name:element,
            value:totalForStatus
        }
    });
    


 return(
    <PieChart width={800} height={800}>
    <Pie
      data={data}
      cx={300}
      cy={200}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={160}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>


    
 )    }
export default  ReportPieChart