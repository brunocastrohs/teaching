import "./Exporter.css";
import { exportToCSV} from "../../../../utils";


function Exporter(props) {
 
  const handleExporter=()=>{
    exportToCSV(props.data);
  }

  return (
      <span className='StoreExporter' onClick={handleExporter}>🗒️</span>
  );
}

export default Exporter;
