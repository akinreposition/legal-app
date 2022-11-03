import React, { useState } from 'react'

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    // const [ loading, setLoading ] = useState(false);

    // const handleChange = (e) => {
    //     setFormData({...formData, [e.target.value]: e.target.value });
    // }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        setEmail('');
        setPassword('');
    }
    
  return (
    <div className='wrapper'>
        <div className='login-layout'>
            <form onSubmit={onSubmit}>
                <div style={{marginBottom: '30px'}}>
                    <h4 className='login_header'>Login</h4>
                    <span className='sub_header'>Securely login to your account</span>
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

                <div id='margin_left'>
                    <label htmlFor='password' className='label'>Password</label>
                    <span className='reset_password'>Reset Password</span>
                    <input 
                        type="password"
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder= "password"
                        className='input'
                        minLength={8}
                        required
                    />
                </div>
                <button 
                  type="submit"
                  className='btn_login'
                >
                  Login
                </button> 
            </form>
        </div>
    </div>
  )
};

export default Login
