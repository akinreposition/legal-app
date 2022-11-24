import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import justics from "../assets/images/justics.png"
import Card from '../components/layout/Card';
import { login, reset } from "../features/auth/authSlice";
import Spinner from '../components/Spinner';

const Login = () => {
    // component use state
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    // const [ loginData, setLoginData ] = useState({
    //     email: "",
    //     password: ""
    // });

    // initialize the navigate router
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )
    
    // const { email, password } = loginData;
    
    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user ) {
            navigate('/dashboard')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    // const handleChange = (e) => {
    //     setLoginData({...loginData, [e.target.value]: e.target.value });
    // }
    

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        }
        console.log(userData);
        dispatch(login(userData))
        // if ( email === "") {
        //     toast.error('Enter valid email')
        // } else if ( password === "") {
        //     toast.error('Enter correct password')
        // } else {
            
        // }
    
    }

    const forgotPassword = () => navigate('/resetpassword');

    if(isLoading) {
        return <Spinner />
    }
    
  return (
    <Card>
        <div className='flex'>
            <img src={justics}  width="50%"  className="hidden md:flex mx-auto sm:mx-0 sm:shrink-0 lg:rounded" alt="justics" loading='lazy'/>
            <div className='mx-auto'>
                <h1 className='font-bold text-base  text-center'>SMART SOLUTIONS</h1>
                <h3 className='font-bold text-center mt-5'>Login</h3>
                <h6 className='font-normal text-center mt-3 text-gray-light'>Please login to your account</h6>

                <form onSubmit={onSubmit} className="px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-light text-sm font-bold mb-2 " htmlFor="email">
                            Email Address
                        </label>
                        <input className="shadow appearance-none border border-gray-light rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline valid:border-green-500 invalid:border-red-500"
                            name="email" 
                            type="email" 
                            placeholder="you@mail.com"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            // onChange={handleChange}
                            required
                            />
                    </div>

                    <div className="mb-1">
                        <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-gray-light rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline valid:border-green-500 invalid:border-red-500" 
                            name="password" 
                            type="password" 
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            // onChange={handleChange}
                            required
                            minLength={8}
                            />
                    </div>

                    {/* <div className='flex flex-row mb-3'>
                        <span className="hidden md:flex">
                            <input type="checkbox" className="hidden md:flex required:border-red-500 checked:bg-btn ..." /> Remember me
                        </span>
                        <p className='w-auto px-14 text-right'>forgot password</p>
                    </div> */}
                    <p className='text-right text-gray-light mb-2 cursor-pointer hover:text-btn' onClick={forgotPassword}>forgot password</p>

                    <button className="bg-btn hover:bg-gray-light text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Login
                    </button>

                    <div className="mt-3 flex items-center justify-between">
                    <span>Don’t have an account? </span>
                    <a className="inline-block align-baseline font-bold text-sm text-btn hover:gray-light px-2" href="/sign-up">
                        Sign up
                    </a>
                    </div>
                </form>
            </div>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
            &copy;2022 Barrister Limited. Terms of use. Privacy policy
        </p>
    </Card>
  )
};

export default Login
