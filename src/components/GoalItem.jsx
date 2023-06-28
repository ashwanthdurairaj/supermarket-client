import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal, onDoubleClick }) {
  const dispatch = useDispatch()

  return (
    // <div className='goal' onDoubleClick={() => onDoubleClick(goal._id, goal.item_name, goal.brand_name, goal.item_type)}>
    //   {/* <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div> */}
    //   <h2>Item Name: {goal.item_name}</h2>
    //   <h2>Minimum Quantity: {goal.minimum_quantity} {goal.item_type}</h2>
    //   <h2>Price: {goal.price} Rs.</h2>
    //   <h2>Quantity Left: {goal.quantity_left} {goal.item_type}</h2>
    //   <h2>Brand: {goal.brand_name}</h2>

    // </div>
        <tr>
        <td>{goal.item_name}</td>
        <td>{goal.minimum_quantity} {goal.item_type}</td>
        <td>{goal.price}</td>
        <td>{goal.quantity_left} {goal.item_type}</td>
        <td>{goal.brand_name}</td>
        <td>      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
         X
       </button></td>
       <td><button onClick={() => onDoubleClick(goal._id, goal.item_name, goal.brand_name, goal.item_type)}>Update</button></td>
        </tr>

  )
}

export default GoalItem
