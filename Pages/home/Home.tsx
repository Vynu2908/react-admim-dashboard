import Chartbox from '../../Components/chartBox/Chartbox'
import Barchart from '../../Components/barChart/Barchart'
import Topbox from '../../Components/topbox/Topbox'
import './Home.scss'
import {chartBoxUser,barChartBoxRevenue,barChartBoxVisit} from '../../data'
import Piechart from '../../Components/pieChart/Piechart'

const Home = () => {
  return (
    <div className='home'>
    <div className='box box1'><Topbox/></div>
    <div className='box box2'><Chartbox {...chartBoxUser}/></div>
    <div className='box box3'><Chartbox/></div>
    <div className='box box4'><Piechart/></div>
    <div className='box box5'><Chartbox/></div>
    <div className='box box6'><Chartbox/></div>
    <div className='box box7'>Box 7</div>
    <div className='box box8'><Barchart {...barChartBoxRevenue}/></div>
    <div className='box box9'><Barchart {...barChartBoxVisit}/></div>
    </div>

  )
}

export default Home