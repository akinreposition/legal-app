import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/layout/NavBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import CreateNewPassword from './pages/CreateNewPassword';

const App = () => {
  return (
    <div className='subpixel-antialiased'>
      
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/createnewpassword' element={<CreateNewPassword />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
        <ToastContainer />
    </div>
  );
}

export default App;
