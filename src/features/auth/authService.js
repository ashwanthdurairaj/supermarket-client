import axios from 'axios'

const API_URL = 'https://supermarket-api-a8az.vercel.app/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post('https://supermarket-api-a8az.vercel.app/api/users', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}
//lolol
// Login user
const login = async (userData) => {
  const response = await axios.post('https://supermarket-api-a8az.vercel.app/api/users/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
