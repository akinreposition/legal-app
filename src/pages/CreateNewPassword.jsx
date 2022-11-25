import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { createNewPassword, reset } from "../features/auth/authSlice"
import Spinner from '../components/Spinner';

const CreateNewPassword = () => {
    const [ code, setCode ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ confirmNewPassword, setConfirmNewPassword ] = useState('');

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
            navigate('/login')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onSubmit = (e) => {
        e.preventDefault();

        if ( newPassword !== confirmNewPassword) {
            toast.error('Passwords do not match')
        } else {
            const userData = { code, newPassword }
            console.log(userData);
            dispatch(createNewPassword(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }

  return (
    <div className='loadingSpinnerContainer'>
        <div className='card'>
            <div className='p-6'>
                <h2 className='px-5 text-center font-extrabold text-2xl'>Create New Password</h2>
                <p className='text-left w-auto max-w-xs font-normal mb-4'>Please enter the reset code sent to your email address and create a new password</p>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                            <label className="block text-black text-sm font-extrabold mb-2 " htmlFor="code">
                                Enter Code
                            </label>
                            <input className="shadow appearance-none border border-gray-light rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline valid:border-green-500 invalid:border-red-500"
                                name="code" 
                                type="number" 
                                placeholder="you@mail.com"
                                value={code}
                                onChange={(e) => {setCode(e.target.value)}}
                                required
                                />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2 " htmlFor="newPassword">
                                New Password
                            </label>
                            <input className="shadow appearance-none border border-gray-light rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline valid:border-green-500 invalid:border-red-500"
                                name="newPassword" 
                                type="password" 
                                placeholder="Enter 8 characters or more"
                                value={newPassword}
                                onChange={(e) => {setNewPassword(e.target.value)}}
                                required
                                />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2 " htmlFor=" confirm Password">
                                Confirm Password
                            </label>
                            <input className="shadow appearance-none border border-gray-light rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline valid:border-green-500 invalid:border-red-500"
                                name="confirmNewPassword" 
                                type="password" 
                                placeholder="Enter 8 characters or more"
                                value={confirmNewPassword}
                                onChange={(e) => {setConfirmNewPassword(e.target.value)}}
                                required
                                />
                        </div>
                        <button className="bg-btn hover:bg-gray-light text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Create Password
                        </button>
                </form>
            </div>
        </div>    
    </div>
  )
}

export default CreateNewPassword