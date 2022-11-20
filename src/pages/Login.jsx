import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import app_bg from "../assets/images/app_bg.png"
import Card from '../components/layout/Card';

const Login = () => {
    // initialize the navigate router
    const navigate = useNavigate();

    // component use state
    const [ email, setEmail ] = useState('');
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
    <Card>
        <div className="m-6 flex py-4 px-4  mx-auto  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img className="w-1/2 form-img block mx-auto sm:mx-0 sm:shrink-0 lg:rounded" src={app_bg} alt="login" loading='lazy'/>
            <div className="w-1/2 text-center space-y-2 sm:text-left">
                <div className="space-y-0.5 w-80">
                    <span className="text-md text-black sm:text-center md:text-center font-bold">
                        SMART SOLUTIONS
                    </span>
                    <h6 className="md:ml-8 text-md sm:text-center mt-5 md:text-center text-black font-bold">
                        LOGIN PAGE
                    </h6>
                    <p className='text-sm'>Please login to your account</p>

                    <form className="text-slate-500 font-medium">
                        <div className='py-1'>
                            <label htmlFor='username' className='label'>Username</label>
                            <input 
                                type='email'
                                name='email'
                                // value={email}
                                placeholder="Enter username"
                                // onChange={}
                                className='input border outline-input-box'
                            />
                        </div>

                        <div className='py-1'>
                            <label htmlFor='password' className='label'>Password</label>
                            <input 
                                type='password'
                                name='password'
                                // value={password}
                                placeholder="Enter password"
                                // onChange={}
                                className='input border outline-input-box'
                            />
                        </div>
                        <div className='py-1'>
                            <label htmlFor='remember me' className='label'>remember me</label>
                            <input 
                                type='checkbox'
                                name='rememberMe'
                                // value={password}
                                // onChange={}
                                className='btn-check'
                            />
                        </div>

                        <div>
                        <button className="px-4 py-1 text-sm  text-white bg-btn text-purple-600 font-semibold rounded-lg w-48 border border-btn hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </Card>
  )
};

export default Login
