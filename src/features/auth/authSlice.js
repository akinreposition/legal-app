import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString
        return thunkAPI.rejectWithValue(message)
    }
})

// Login user
export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString
        return thunkAPI.rejectWithValue(message)
    }
})

// Reset Password
export const resetPassword = createAsyncThunk('auth/resetPassword', async(email, thunkAPI) => {
    try {
        return await authService.resetPassword(email)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString
        return thunkAPI.rejectWithValue(message)
    }
})
// Create New Password
export const createNewPassword = createAsyncThunk('auth/createNewPassword', async(email, thunkAPI) => {
    try {
        return await authService.createNewPassword(email)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError= false
            state.isSuccess= false
            state.isLoading= false
            state.message= ''
        }
    },
    extraReducers: (builder) => {
        // for new users
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action)  => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })

        // for login user
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action)  => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })

        // for reset password
        builder
        .addCase(resetPassword.pending, (state) => {
            state.isLoading = true
        })
        .addCase(resetPassword.fulfilled, (state, action)  => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(resetPassword.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            // state.user = null
        })
    }
})

export const { reset } =authSlice.actions
export default authSlice.reducer