import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { resetPassword, reset } from "../features/auth/authSlice"
import Spinner from '../components/Spinner';

const ResetPassword = () => {
    const [ email, setEmail ] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user ) {
            navigate('/createnewpassword')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        dispatch(resetPassword(email))
    }

    if(isLoading) {
        return <Spinner />
    }

  return (
    <div className='loadingSpinnerContainer'>
        <div className='card'>
            <div className='p-6'>
                <h4 className='px-5 text-center font-extrabold'>Reset Password</h4>
                <p className='text-left w-auto font-normal mb-4'>A reset code will be sent to your registered email address</p>
                <form onSubmit={onSubmit}>
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
                                required
                                />
                        </div>
                        <button className="bg-btn hover:bg-gray-light text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Reset Password
                        </button>
                </form>
            </div>
        </div>    
    </div>
  )
}

export default ResetPassword