import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './piechart.scss';

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];

const Piechart = () => {
  return (
    <div className='piechart'>
        <h1>Lead by Source</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={300}>
            <PieChart >
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
        <Pie
          data={data}
          
          innerRadius="70%"
          outerRadius="90%"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
       
      </PieChart>
            </ResponsiveContainer>
            <div className="bottom">
           {data.map((item)=>(
                <div className="combine">
                    <div className="title">
                        <div className="dot" style={{backgroundColor:item.color}}></div>
                        <div className="itemname">{item.name}</div>
                    </div>
                    <div className="itemvalue">
                        {item.value}
                    </div>
                </div>
           ))}
        </div>
        </div>

    </div>
  )
}

export default Piechart