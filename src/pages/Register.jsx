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
        confirmPassword: '',
    })
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )
    
    const { email, password, confirmPassword } = formData;

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
        if ( password !== confirmPassword) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                email,
                password
            }
            console.log(userData);
            dispatch(register(userData))
        }
        
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
        })
        navigate('/#')
    }

    if(isLoading) {
        return <Spinner />
    }
    
  return (
    <>
        <Card>
            <div className='parent'>
                <div className="child ml-8">
                    <img src={justics}  width="35%" alt="justics"/>
                </div>
                <div className='child'>
                    <h4>SMART SOLUTIONS</h4>
                    <h5 className='font-bold text-center ml-2'>Sign Up</h5>
                </div>
            </div>
        </Card>
    </>
  )
}

export default Register