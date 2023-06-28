import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateGoal } from '../features/goals/goalSlice'

function Update() {
  const [goalform, setgoalform] = useState({
    minimum_quantity: '',
    price: '',
    quantity_left: '',
  })
  const location = useLocation();
  const {minimum_quantity, price, quantity_left} = goalform;
  const dispatch = useDispatch();
  const object_id = location.state.object_id;
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Dispatching')
    console.log({object_id, minimum_quantity, price, quantity_left});
    dispatch(updateGoal({object_id, minimum_quantity, price, quantity_left}));
    setgoalform({
      minimum_quantity: '',
      price: '',
      quantity_left: '',
    })
    // useNavigate('/');
  }
  const onChange = (e) => {
    setgoalform((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <section className='form'>
      <h1>Item Name: {location.state.name}</h1>
      <h1>Brand Name: {location.state.brand_name}</h1>
      <h1>Item Type: {location.state.type}</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
        <label htmlFor='price'>Price</label>
          <input
            type='price'
            name='price'
            id='price'
            value={price}
            onChange={onChange}
          />

        </div>
        <div className = "form-group">
        <label htmlFor='minimum_quantity'>Minimum Quantity</label>
          <input
            type='minimum_quantity'
            name='minimum_quantity'
            id='minimum_quantity'
            value={minimum_quantity}
            onChange={onChange}
          />
        </div>
        <div className = "form-group">
          <label htmlFor='quantity_left'>Quantity Added</label>
          <input
            type='quantity_left'
            name='quantity_left'
            id='quantity_left'
            value={quantity_left}
            onChange={onChange}
          />  
          </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Update Item
          </button>
        </div>
      </form>
    </section>

    )
}

export default Update