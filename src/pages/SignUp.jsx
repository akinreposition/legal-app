import React,{ useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import Card from '../components/layout/Card'
import { register, reset } from "../features/auth/authSlice";
import Spinner from '../components/Spinner';
import justics from '../assets/images/justics.png';

const Register = () => {    
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
        password2: '',
    })
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )
    
    const { email, password, password2 } = formData;

    function checkPasswordComplexity(password) {
        let regex = /^(?=(?:[^a-z]*[a-z]){2})(?=(?:[^A-Z]*[A-Z]){2})(?=(?:\D*\d){2})(?=(?:[^!@#$%^&*)(]*[!@#$%^&*)(]){2}).{8,}$/;
        return regex.test(password);
    }

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user ) {
            navigate('/login')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();  
        checkPasswordComplexity(password);
        if ( password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                email,
                password
            }
            console.log(userData);
            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }
    
  return (
    <>
        <Card>
            <div className='flex'>
                <img src={justics}  width="50%"  className="hidden md:flex mx-auto sm:mx-0 sm:shrink-0 lg:rounded" alt="justics" loading='lazy'/>
                <div className='mx-auto'>
                    <h1 className='font-bold text-base  text-center'>SMART SOLUTIONS</h1>
                    <h3 className='font-bold text-center mt-5'>Sign Up</h3>
                    <h6 className='font-normal text-center mt-3 text-gray-light'>Securely create your account</h6>

                    <form onSubmit={onSubmit} className="px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input className="shadow appearance-none border border-gray-light rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline valid:border-green-500 invalid:border-red-500"
                             name="email" 
                             type="email" 
                             placeholder="you@mail.com"
                             value={email}
                             onChange={handleChange}
                             required
                             />
                        </div>

                        <div className="mb-4">
                        <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-gray-light rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline invalid:border-red-500 valid:border-green-500 " 
                          name="password" 
                          type="password" 
                          placeholder="Enter Password"
                          value={password}
                          onChange={handleChange}
                          required
                          minLength={8}
                          />
                        {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>

                        <div className="mb-2">
                        <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="password">
                            Confirm Password
                        </label>
                        <input className="shadow appearance-none border border-gray-light rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline valid:border-green-500 invalid:border-red-500" 
                          name="password2" 
                          type="password" 
                          placeholder="Confirm Password"
                          value={password2}
                          onChange={handleChange}
                          required
                          minLength={8}
                           />
                        {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>
                        
                        <button className="bg-btn hover:bg-gray-light text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>

                        <div className="mt-3 flex items-center justify-between">
                        <span>Already have an account? </span>
                        <a className="inline-block align-baseline font-bold text-sm text-btn hover:gray-light px-2" href="/login">
                            Login
                        </a>
                        </div>
                    </form>
                </div>
            </div>
            <p className="mt-5 text-center text-gray-500 text-xs">
                &copy;2022 Barrister Limited. Terms of use. Privacy policy
            </p>
        </Card>
        {/* <p class="text-center text-gray-500 text-xs">
            &copy;2022 Barrister Limited. Terms of use. Privacy policy
        </p> */}
    </>
  )
}

export default Register