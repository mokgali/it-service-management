import { Container,Row,Col } from "react-bootstrap"
import ReportPieChart from "./ReportPieChart";
import Styles from "./StatisticsSummary.module.css"

function StatisticsSummary({chartData}){

    const chartDataByStatus= ["Open","Pending","Closed"].map(element => {
        var totalForStatus=0;
        if(chartData!==null && chartData.length>0)
        {chartData.forEach(chartDataElement=>{
               if(element===chartDataElement.status){
                totalForStatus++;
               }
        })
        return{
            name:element,
            total:totalForStatus
        }
    }
    });    

    return (
        <>
       <div className={Styles.statsTotals}>
        {chartDataByStatus.map(dataByStatus=>{
        return (
        <div className={Styles.statTotalsItem} key={dataByStatus.name}>
         <p>{dataByStatus.name}</p>
         <p>{dataByStatus.total}</p>
             
        </div>
        )
        })}       
      </div>
       <div className={Styles.pieChart}>
         <ReportPieChart chartData={chartDataByStatus} />
         </div>
       </>

       )
}
export default StatisticsSummary