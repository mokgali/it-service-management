import {PieChart,Pie,Cell} from 'recharts'
import Styles from "./ReportPieChart.module.css"


  let COLORS = {Open:'rgb(255, 0, 0)',Pending:'rgb(255,187,40)',Closed:'rgb(0, 196, 159)'};
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


 return(
    <PieChart width={1500} height={400} >
    <Pie
      data={chartData}
      cx={300}
      cy={200}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={160}
      fill="#8884d8"
      dataKey="total"
    >
      {chartData.map((entry, index) => (      
        <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
      ))}
    </Pie>
  </PieChart>


    
 )    }
export default  ReportPieChart