import React,{ useState } from 'react';
import Card from '../components/layout/Card'

const Register = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ password2, setPassword2 ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        setEmail('');
        setPassword('');
        setPassword2('')
    }
  return (
    <div>
        <Card>
            <form onSubmit={onSubmit}>
                <div style={{marginBottom: '30px'}}>
                    <h4 className='reg_header'>Create my Account</h4>
                    <span className='sub_header'>Securely create your account</span>
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
                {}
                <div id='margin_left'>
                    <label htmlFor=' create password' className='label'>Create Password</label>
                    <input 
                        type="password"
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder= "Enter 8 characters or more"
                        className='input'
                        minLength={8}
                        required
                    />
                </div>

                <div id='margin_left'>
                    <label htmlFor=' create password' className='label'>Confirm Password</label>
                    <input 
                        type="password"
                        name='password2'
                        value={password2}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder= "Enter 8 characters or more"
                        className='input'
                        minLength={8}
                        required
                    />
                </div>
                
                <div>
                <p className='TandC'>By proceeding you agree to Sigma Terms and Conditions, Waiver and Indemnity</p>
                </div>
                <button 
                    type="submit"
                    className='btn_login'
                >
                Continue
                </button> 
            </form>
        </Card>
    </div>
  )
}

export default Register