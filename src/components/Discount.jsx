import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { revokeDiscount } from '../features/goals/goalSlice'
function Discount() {
    const location = useLocation();
    const { user } = useSelector((state) => state.auth)
    const { goals, isLoading, isError, message } = useSelector(
      (state) => state.goals
    )
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const apply = () => {
        console.log('apply')
        navigate('/discountform')    
    }

    const revoke = () => {
        console.log('revoke')
        dispatch(revokeDiscount({id: user._id}))
    }

    return (
        <div className='form-group'>
          <button className='btn btn-block' onClick = {apply}>
            Apply Discount
          </button>
          <button className='btn btn-block' onClick = {revoke}>
            Revoke Discount
          </button>
        </div>

  )
}

export default Discount