import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Notification({goal}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()  
  
    return (
    <div className = 'goal'>
        <h2>{goal.item_name}</h2>
        <h2>{goal.brand_name}</h2>
        <h2>Quantity Left: {goal.quantity_left} {goal.item_type}</h2>
        <h2>Minimum Quantity: {goal.minimum_quantity} {goal.item_type}</h2>
    </div>
  )
}

export default Notification