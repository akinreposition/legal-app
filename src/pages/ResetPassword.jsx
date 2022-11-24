import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../components/layout/Card'

const ResetPassword = () => {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const login = () => navigate("/login");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setTimeout(() => {
            navigate("/createnewpassword");
        }, 5000)
        setEmail('');
    }

  return (
    <div className='loadingSpinnerContainer'>
        <div className='justify-center'>
            <Card>
                <h4 className='mx-auto text-center font-extrabold'>Reset Password</h4>
                <p className='txt'>A reset code will be sent to your registered email address</p>
                <form onSubmit={onSubmit}>

                    <div id='margin_left'>
                        <label htmlFor='email' className='label'>Email address</label>
                        <input 
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder= "you@domain.com"
                            className='input'
                            required
                        />
                    </div>
                    <button 
                    type="submit"
                    className='btn_login'
                    >
                    Reset Password
                    </button>
                </form>
            </Card>
        </div>    
    </div>
  )
}

export default ResetPassword