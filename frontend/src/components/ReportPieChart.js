import {PieChart,Pie,Cell} from 'recharts'
import Styles from "./ReportPieChart.module.css"


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
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>


    
 )    }
export default  ReportPieChart