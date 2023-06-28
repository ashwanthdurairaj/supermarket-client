import { useSelector, useDispatch } from 'react-redux'
import { sortQuantity, sortSales, clear } from '../features/goals/goalSlice'
import { useNavigate } from 'react-router-dom'
function Demand() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
    )
    // const [analyser, setAnalyser] = useState({
    //     sale: false,
    //     sold: false,
    // })
    const sales = () => {
        console.log('sortSales')
        const id = user._id
        dispatch(sortSales({id})).then((payload) => {navigate('/display', {state: payload})})
    }
    const quantity_sold = () =>{
        const id = user._id
        console.log('sortQuantity')
        dispatch(sortQuantity({id})).then((payload) => {navigate('/display', {state: payload})})
    }
    const ddd = () => {
        const id = user._id
        dispatch(clear({id}))
    }

    return (
    
    <section className='content'>
        <button className='btn btn-block' onClick = {sales}>
            Sales
        </button>
        <button className='btn btn-block' onClick = {quantity_sold}>
            Quantity Sold
        </button>
        <button className='btn btn-block' onClick = {ddd}>
            Refresh Demand Data
        </button>

    </section>
  )
}

export default Demand