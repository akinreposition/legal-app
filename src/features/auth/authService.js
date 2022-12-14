 import axios from 'axios'

//  Base url 
 const API_URL = "http://localhost:5000/api/user/"

// Register new user
const register = async ( userData ) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
     return response.data
}

// Login user
const login = async ( userData ) => {
    const response = await axios.post(API_URL, userData)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
     return response.data
}

// Reset user password
const resetPassword = async ( email ) => {
    const response = await axios.post(API_URL, email)
    if(response.data) {
        localStorage.setItem('email', JSON.stringify(response.data))
    }
    return response.data
}

// Create new password
const createNewPassword = async ( userData ) => {
    const response = await axios.post(API_URL, userData)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


const authService = {
    register,
    login,
    resetPassword,
    createNewPassword
}
export default authService