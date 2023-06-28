import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import Notification from '../components/Notification'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )
  

  const onClick = () => {
    console.log('Billing');
    navigate('/billing')
  }
  const onDoubleClick = async(id, name, brand_name, type) => {
    console.log(id);
    console.log('Double Click');
    navigate('/update', {state:{object_id:id, name:name, brand_name:brand_name, type:type}}); //{state:{id:1,name:'sabaoon'}}
  }

  const discount = () => {
    console.log('discount')
    navigate('/discount');
  }

  const inventory = () => {
    console.log('view inventory')
    navigate('/inventory')
  }

  const Add = () => {
    console.log('Add')
    navigate('/add')
  }

  const Demand = () => {
    console.log('Demand');
    navigate('/demand')
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

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Items Dashboard</p>
      </section>
      
      <section className = 'form'>
      <div className='form-group'>
          <button className='btn btn-block' onClick = {onClick}>
            Billing
          </button>
          <button className='btn btn-block' onClick = {Demand}>
            Demand Analyser
          </button>
          <button className='btn btn-block' onClick = {Add}>
            Add Items
          </button>
          <button className='btn btn-block' onClick = {inventory}>
            Manage Inventory
          </button>
          <button className='btn btn-block' onClick = {discount}>
            Manage Discount
          </button>
        </div>
      </section>

      {/* <GoalForm /> */}

      {/* <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} onDoubleClick={onDoubleClick}/>
            ))}
          </div>
        ) : (
          <h3>Your inventory is empty</h3>
        )}
      </section> */}
      {
        <section className = 'content'>
          <h2>Notifications:</h2> 
          {goals.map((goal) => (goal.quantity_left < goal.minimum_quantity ? <Notification goal = {goal}/> : <p></p>))}
        </section>
      }      
          </>
  )
}

export default Dashboard
