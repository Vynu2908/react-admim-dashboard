import { ResponsiveContainer, BarChart,Bar, Tooltip } from "recharts";
import './barChart.scss';

type Props={
    title: string;
    color:string;
    dataKey:string;
    chartData:{name:string,profit:number}[];
}


const Barchart = (props:Props) => {
  return (
    <div className="barchart">
        <h3 className="title">{props.title}</h3>
        <div className="chart">
         <ResponsiveContainer width="99%" height={150}>

        <BarChart data={props.chartData}>
            <Tooltip 
            contentStyle={{background:"#2a3447",borderRadius:"5px"}}
            labelStyle={{display:"none"}}
            cursor={{fill:"none"}}/>
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
  

      </div>
    
    </div>
  )
}

export default Barchart