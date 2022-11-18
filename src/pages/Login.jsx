import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import app_bg from "../assets/images/app_bg.png"
import Card from '../components/layout/Card';

const Login = () => {
    // initialize the navigate router
    const navigate = useNavigate();

    // component use state
    // const [ email, setEmail ] = useState('');
    // const [ password, setPassword ] = useState('');
    // const [ loading, setLoading ] = useState(false);

    // const handleChange = (e) => {
    //     setFormData({...formData, [e.target.value]: e.target.value });
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email, password);
    //     setEmail('');
    //     setPassword('');

    // }

    // const resetPassword = () => navigate('/resetpassword');
    // const register = () => navigate('/register');
    
  return (
        <div class="m-12 py-8 px-8 max-w-sm mx-auto bg-white shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img class="block mx-auto h-24 sm:mx-0 sm:shrink-0 lg:rounded" src={app_bg} alt="login" />
            <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
                <h5 class="text-md text-black font-bold">
                    SMART SOLUTIONS
                </h5>
                <p class=" mt-9 text-center text-sm text-black font-bold">
                    LOGIN PAGE
                </p>
                <form class="text-slate-500 font-medium">
                Product Engineer
                </form>
            </div>
            <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
            </div>
        </div>
    // <Card>
    //     <div className='flex flew-row items-center container mx-auto px-4 md:container md:mx-auto sm:container sm:py-4 '>
            
    //             <img src={app_bg} width="100px" height="100px" className='basis-1/6' title='justic logo' alt='logo'/>
            
           
    //             <form>
    //                 <div>
    //                 <label htmlFor='email'>Email</label>
    //                 <input 
    //                     placeholder='email'
    //                 />
    //                 </div>
    //                 <label htmlFor='password'>Password</label>
    //                 <input 
    //                     placeholder='password'
    //                 />                
    //             </form>
          
    //     </div>
    // </Card>
  )
};

export default Login
