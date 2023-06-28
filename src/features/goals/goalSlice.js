import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import goalService from './goalService'

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new goal
export const createGoal = createAsyncThunk(
  'goals/create',
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.createGoal(goalData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user goals
export const getGoals = createAsyncThunk(
  'goals/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.getGoals(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user goal
export const deleteGoal = createAsyncThunk(
  'goals/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      console.log('token')
      console.log(token);
      return await goalService.deleteGoal(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const updateGoal = createAsyncThunk(
  'goals/update',
  async(data, thunkAPI) => {
    try{
      const token = thunkAPI.getState().auth.user.token
      return await goalService.updateGoal(data, token)
    }
    catch(error){
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
)

export const sortSales = createAsyncThunk(
  'goals/sortSales',
  async(id, thunkAPI) => {
    try{
      const token = thunkAPI.getState().auth.user.token
      return await goalService.sortSales(id, token)
    }
    catch(error){
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
)

export const sortQuantity = createAsyncThunk(
  'goals/sortQuantity',
  async(id, thunkAPI) => {
    try{
      const token = thunkAPI.getState().auth.user.token
      console.log(id)
      return await goalService.sortQuantity(id, token)
    }
    catch(error){
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
)


export const billing = createAsyncThunk('goals/billing', 
async(data, thunkAPI) => {
  try{
    const token = thunkAPI.getState().auth.user.token
    return await goalService.billing(data, token)
  }
  catch(error){
    const message =
    (error.response &&
      error.response.data &&
      error.response.data.message) ||
    error.message ||
    error.toString()
  return thunkAPI.rejectWithValue(message)
  }
}
)

export const search = createAsyncThunk('goals/search', 
async(data, thunkAPI) => {
  try{
    const token = thunkAPI.getState().auth.user.token
    return await goalService.search(data, token)
  }
  catch(error){
    const message = (error.response &&
      error.response.data &&
      error.response.data.message || error.response.data.message) || 
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)  
    }
})

export const clear = createAsyncThunk('goals/clear', 
async(data, thunkAPI) => {
  try{
    const token = thunkAPI.getState().auth.user.token
    return await goalService.clear(data, token)
  }
  catch(error)
  {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message || error.response.data.message) || 
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)  
  }
})

export const applyDiscount = createAsyncThunk('goals/clear', 
async(data, thunkAPI) => {
  try{
    const token = thunkAPI.getState().auth.user.token
    console.log(data)
    return await goalService.applyDiscount(data, token)
  }
  catch(error)
  {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message || error.response.data.message) || 
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)  
  }
})

export const revokeDiscount = createAsyncThunk('goals/clear', 
async(data, thunkAPI) => {
  try{
    const token = thunkAPI.getState().auth.user.token
    console.log(data)
    return await goalService.revokeDiscount(data, token)
  }
  catch(error)
  {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message || error.response.data.message) || 
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)  
  }
}) 

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals.push(action.payload)
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getGoals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = action.payload
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id
        )
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
