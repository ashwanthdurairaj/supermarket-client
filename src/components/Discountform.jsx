import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { applyDiscount } from '../features/goals/goalSlice'

function Discountform() {

    const [goalform, setgoalform] = useState({
        item_name: 0,
      })
      const { user } = useSelector((state) => state.auth)
      const { goals, isLoading, isError, message } = useSelector(
        (state) => state.goals
      )    
      const {item_name} = goalform
      const dispatch = useDispatch()
      const [state, setState] = useState('')
      const onSubmit = (e) => {
        e.preventDefault()
        dispatch(applyDiscount({id: user._id, dis: item_name}))
      
        setgoalform({
          item_name: 0,
        })
      }
      const onChange = (e) => {
        setgoalform((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))}
      
        
      return (
        <section className='form'>
        <p><b>ENTER DISCOUNT PERCENT</b></p>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='item_name'>Discount</label>
            <input
              type='item_name'
              name='item_name'
              id='item_name'
              value={item_name}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block' type='submit'>
              Apply Discount
            </button>
          </div>
        </form>
  
      </section>   
)}
export default Discountform