import './graph-dashboard.css'
import MyChart from './graph-class';
const GraphDashboard = ()=>{
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        values: [0, 10, 5, 2, 20, 30, 45],
      };
    return(
        <MyChart data={data} />
    )
}
export default GraphDashboard;