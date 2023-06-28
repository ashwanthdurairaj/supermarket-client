import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { billing } from '../features/goals/goalSlice'
import Cart from './Cart'
function Billing () {

  const [goalform, setgoalform] = useState({
    item_name: '',
    quantity_left: '',
    item_type: '',
    brand_name: '',
  })
  const [sales, setsales] = useState(0);
  const {item_name, quantity_left, item_type, brand_name} = goalform
  
  const [list, setList] = useState([])

  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()  
    console.log('Submit billing')
    // const oh = dispatch(billing({ item_name, quantity_left, item_type, brand_name }))
    // console.log('total: ',oh)
    dispatch(billing({item_name, quantity_left, item_type, brand_name})).then((payload) => {
      setsales(sales + payload.payload.total)
      let i = payload.payload
      setList(list => [...list, i])
      console.log(payload)
      console.log(list)
    })//setsales(sales + payload.payload)})
    
    setgoalform({
      item_name: '',
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

<section className = 'form'>
<p>Total: {sales}Rs.</p>
<form onSubmit = {onSubmit}>
<div className = 'form-group'>
<label htmlFor='item_name'>Item Name</label>
          <input
            type='item_name'
            name='item_name'
            id='item_name'
            value={item_name}
            onChange={onChange}
          />
</div>
<div className = 'form-group'>
<label htmlFor='brand_name'>Brand Name</label>
          <input
            type='brand_name'
            name='brand_name'
            id='brand_name'
            value={brand_name}
            onChange={onChange}
          />
</div>
<div className = 'form-group'>
<label htmlFor='item_type'>Item Type</label>
          <input
            type='item_type'
            name='item_type'
            id='item_type'
            value={item_type}
            onChange={onChange}
          />
</div>
<div className = 'form-group'>
<label htmlFor='quantity_left'>Quantity</label>
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
            Click to Bill the Item
          </button>
        </div>
</form>
<div>
    {list.length > 0 ? (

        <div>
          <p>Your Cart</p>
        <table>
        <tr>
        <th>Item Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Total Price</th>
        </tr> {/* right here the very moment */}
                    {list.map((goal) => (
                  <Cart goal={goal}/>
                ))}
        </table>
        </div>
            ) : (
              <h3>Your Cart is Empty</h3>
            )}
          {/* </section> */}
    
        </div>

</section>
  )
}

export default Billing 