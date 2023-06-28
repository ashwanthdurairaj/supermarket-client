import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalItem from './GoalItem'
import { getGoals, reset } from '../features/goals/goalSlice'
import  View  from './View'
import { useState } from 'react'
import { search } from '../features/goals/goalSlice'
import  Result  from './Result'
function Inventory() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user } = useSelector((state) => state.auth)
    const { goals, isLoading, isError, message } = useSelector(
      (state) => state.goals
    )
    const [goalform, setgoalform] = useState({
      item_name: '',
    })
    const {item_name} = goalform
    
    const [status, setStatus] = useState('')

    const [result, setResult] = useState([])
    const onSubmit = (e) => {
      e.preventDefault()
    
    
      dispatch(search({ item_name })).then((payload) => {
        console.log(payload)
        setResult(payload.payload)
        setStatus(payload.type)
      })
      setgoalform({
        item_name: '',
      })
      setResult([])
    }  
    const onChange = (e) => {
      setgoalform((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    
    }

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
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='item_name'
            name='item_name'
            id='item_name'
            placeholder='Search'
            value={item_name}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Search
          </button>
        </div>
      </form>

        {/* <section className='content'> */}
        {status == 'goals/search/fulfilled' ? <Result result = {result}/> : <View /> }
    </div>
  )
}

export default Inventory