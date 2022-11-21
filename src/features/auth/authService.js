 import axios from 'axios'

//  Base url 
 const API_URL = "/api/user/"

// Register new user
const register = async ( userData ) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
     return response.data
}

const authService = {
    register,
}
export default authService