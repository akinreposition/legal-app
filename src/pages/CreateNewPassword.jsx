import React, { useState } from 'react'
import Card from '../components/layout/Card'

const CreateNewPassword = () => {
    const [ code, setCode ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ password2, setPassword2 ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(code, password, password2);
        setCode('');
        setPassword('');
        setPassword2('')
    }
  return (
    <div className='hero-image'>
        <div className='layout-center'>
            <Card>
                <form onSubmit={onSubmit}>
                    <div style={{marginBottom: '30px'}}>
                        <h4 className='txt_header'>Create New Password</h4>
                        <p className='sub_txt'>
                            Please enter the reset code sent to your email address and create a new password 
                        </p>
                    </div>

                    <div id='margin_left'>
                        <label htmlFor='email' className='label'>Enter Code</label>
                        <input 
                            type="number"
                            name='code'
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder= "e.g 654678"
                            className='input'
                            required
                        />
                    </div>
                    {}
                    <div id='margin_left'>
                        <label htmlFor='New password' className='label'>New password</label>
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
                        <label htmlFor='Confirm password' className='label'>Confirm Password</label>
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
                    
                    <button 
                        type="submit"
                        className='btn_login'
                    >
                    Create New Password
                    </button> 
                </form>
            </Card>
        </div>
    </div>
  )
}

export default CreateNewPassword