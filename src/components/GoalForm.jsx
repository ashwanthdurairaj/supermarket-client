import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [goalform, setgoalform] = useState({
    item_name: '',
    minimum_quantity: '',
    price: '',
    quantity_left: '',
    item_type: '',
    brand_name: '',
  })
  const {item_name, minimum_quantity, price, quantity_left, item_type, brand_name} = goalform
  const dispatch = useDispatch()
  const [state, setState] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()

  
    dispatch(createGoal({ item_name, minimum_quantity, price, quantity_left, item_type, brand_name })).then((payload) => {setState(payload.type)
      console.log(payload)})
    setgoalform({
      item_name: '',
      minimum_quantity: '',
      price: '',
      quantity_left: '',
      item_type: '',
      brand_name: '',
    })
  }
  const onChange = (e) => {
    setgoalform((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  
  }
  return (
    <section className='form'>
      <p><b>ADD ITEM</b></p>
      {state == 'goals/create/fulfilled'  ? (<p>New Item Added in Inventory</p>) : (<p>Item not Added into inventory</p>)}
    
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='item_name'>Item Name</label>
          <input
            type='item_name'
            name='item_name'
            id='item_name'
            value={item_name}
            onChange={onChange}
          />
        </div>
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
          <label htmlFor='quantity_left'>Initial Quantity</label>
          <input
            type='quantity_left'
            name='quantity_left'
            id='quantity_left'
            value={quantity_left}
            onChange={onChange}
          />  
          </div>
          <div className = "form-group">
          <label htmlFor='item_type'>Item Type</label>
          <input
            type='item_type'
            name='item_type'
            id='item_type'
            value={item_type}
            onChange={onChange}
          />
          </div>
          <div className = "form-group">
          <label htmlFor='brand_name'>Brand Name</label>
          <input
            type='brand_name'
            name='brand_name'
            id='brand_name'
            value={brand_name}
            onChange={onChange}
          />            
          </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Item
          </button>
        </div>
      </form>

    </section>
  )
}

export default GoalForm
