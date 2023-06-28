import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Update from './components/Update'
import Billing from './components/Billing'
import Demand from './components/Demand'
import Display from './components/Display'
import GoalForm from './components/GoalForm'
import Inventory from './components/Inventory'
import Notification from './components/Notification'
import Discount from './components/Discount'
import Discountform from './components/Discountform'
import Revoke from './components/Revoke'
import Interview from './components/Interview'
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/update' element={<Update />} /> 
            <Route path='/billing' element={<Billing />}/>
            <Route path='/demand' element={<Demand />}/>
            <Route path='/display' element={<Display />}/>
            <Route path='/add' element={<GoalForm />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/notifications' element={<Notification />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/discountform' element={<Discountform />} />
            <Route path='/revoke' element={<Revoke/>} />
            <Route path='/interview' element={<Interview />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
