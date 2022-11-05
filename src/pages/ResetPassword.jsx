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
    <>
        <Card>
            <form onSubmit={onSubmit}>
                <div style={{marginBottom: '30px'}}>
                    <h4 className='reset_header'>Reset Password</h4>
                    <span className='txt'>A reset code will be sent to your registered email address</span>
                </div>

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
        <pre>
            <p className='have_acct'>Already have an account?  
                <span style={{color: "black"}} className='cta_link' onClick={login}>    Login</span>
            </p>
        </pre>
    </>
  )
}

export default ResetPassword