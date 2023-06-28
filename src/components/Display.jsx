import { useLocation } from 'react-router-dom'
import DemandItem from './DemandItem'
function Display() {

  const location = useLocation();
  const loc = location.state.payload; 
  return (
    <div>
        {loc.length > 0 ? (
          <div>
            <table>
        <tr>
        <th>Item Name</th>
            <th>Brand</th>
            <th>Quantity Sold</th>
            <th>Sales</th>
        </tr>
            {loc.map((goal) => (
              <DemandItem key={goal._id} goal={goal}/>        
            ))}
            </table>
          </div>
        ) : (
          <h3>Your inventory is empty</h3>
        )}
      </div>
  )
}

export default Display