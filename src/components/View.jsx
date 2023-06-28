import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalItem from './GoalItem'
import { getGoals, reset } from '../features/goals/goalSlice'

function View() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user } = useSelector((state) => state.auth)
    const { goals, isLoading, isError, message } = useSelector(
      (state) => state.goals
    )    

    const onDoubleClick = async(id, name, brand_name, type) => {
        console.log(id);
        console.log('Double Click');
        navigate('/update', {state:{object_id:id, name:name, brand_name:brand_name, type:type}}); //{state:{id:1,name:'sabaoon'}}
      }
              
      useEffect(() => {
        if (isError) {
          console.log(message)
        }
    
        if (!user) {
          navigate('/login')
        }
    
        dispatch(getGoals())
    
        return () => {
          dispatch(reset())
        }
      }, [user, navigate, isError, message, dispatch])


  return (
<div>
    {goals.length > 0 ? (

        <div>
          <p>Items in the Inventory</p>
        <table>
        <tr>
        <th>Item Name</th>
            <th>Minimum Quantity</th>
            <th>Price</th>
            <th>Quantity Left</th>
            <th>Brand</th>
            <th>Delete Item</th>
            <th>Update Item</th>
        </tr> {/* right here the very moment */}
                    {goals.map((goal) => (
                  <GoalItem key={goal._id} goal={goal} onDoubleClick={onDoubleClick}/>
                ))}
        </table>
        </div>
            ) : (
              <h3>Your inventory is empty</h3>
            )}
          {/* </section> */}
    
        </div>
    
    )
}

export default View