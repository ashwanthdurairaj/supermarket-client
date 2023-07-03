import axios from 'axios'

const API_URL = '/api/goals/'
// const API_URL = 'https://supermarket-api.vercel.app/api/goals'
// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL , goalData, config)

  return response.data
}

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)
  console.log('response')
  console.log(response)
  return response.data
}

const updateGoal = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log(data)
  const response = await axios.put(API_URL + data.object_id , data, config)
  return response.data
}

const billing = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put('api/billing', data, config);
  console.log(response)
  console.log(response.data)
  console.log('billing response')
  return response.data
}

const sortQuantity = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log(token, userId)
  const response = await axios.put('api/sortQuantity', userId, config);
  return response.data
}

const sortSales = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log(token)
  const response = await axios.put('api/sortSales', userId, config);
  return response.data
}

const search = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log(token)
  const response = await axios.put('api/search', data, config);
  return response.data
  
}

const clear = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log(token)
  const response = await axios.put('api/clear', userId, config);
  return response.data
}

const applyDiscount = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log(token)
  const response = await axios.put('api/applyDiscount', userId, config);
  return response.data
}

const revokeDiscount = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log(token)
  const response = await axios.put('api/revokeDiscount', userId, config);
  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal,
  billing,
  sortSales,
  sortQuantity,
  search,
  clear,
  applyDiscount,
  revokeDiscount,
}

export default goalService
