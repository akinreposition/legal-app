import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/layout/Card'

const Register = () => {
    const navigate = useNavigate();
    
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [ passwordError, setPasswordError ] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    
    const { email, password, confirmPassword } = formData;

    function checkPasswordComplexity(password) {
        let regex = /^(?=(?:[^a-z]*[a-z]){2})(?=(?:[^A-Z]*[A-Z]){2})(?=(?:\D*\d){2})(?=(?:[^!@#$%^&*)(]*[!@#$%^&*)(]){2}).{8,}$/;
        return regex.test(password);
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();  
        checkPasswordComplexity(password);
        // if (password !== confirmPassword) {
        //     setPasswordError("Password doesn't match!");
    
        // } else {
        //     checkPasswordComplexity(password);
        //     setTimeout(() => {
        //         navigate('#');
        //     }, 5000);
        // }
        console.log(email, password, confirmPassword);
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
        })
        setPasswordError('');
        navigate('/#')
    }
  return (
    <div className='hero-image'>
        <div className='layout-center'>
            <Card>
                <form onSubmit={onSubmit}>
                    <div style={{marginBottom: '30px'}}>
                        <h4 className='reg_header'>Create Account</h4>
                        <span className='sub_header'>Securely create your account</span>
                    </div>

                    <div  controlid="validationCustom01" id='margin_left'>
                        <label htmlFor='email' className='label'>Email address</label>
                        <input 
                            type="email"
                            name='email'
                            value={email}
                            onChange={handleChange}
                            placeholder= "you@domain.com"
                            className='input'
                            required
                        />
                        {passwordError.username && <span className='err'>{passwordError.username}</span>}
                    </div>
                    {}
                    <div  id='margin_left'>
                        <label htmlFor=' create password' className='label'>Create Password</label>
                        <input 
                            type="password"
                            name='password'
                            value={password}
                            onChange={handleChange}
                            placeholder= "Enter 8 characters or more"
                            className='input'
                            minLength={8}
                            required
                        />
                        {passwordError.password && <span className='err'>{passwordError.password}</span>}
                    </div>

                    <div id='margin_left'>
                        <label htmlFor=' confirm password' className='label'>Confirm Password</label>
                        <input 
                            type="password"
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleChange}
                            placeholder= "Enter 8 characters or more"
                            className='input'
                            minLength={8}
                            required
                        />
                        {passwordError.confirmPassword && <span className='err'>{passwordError.confirmPassword}</span>}
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
    </div>
  )
}

export default Register