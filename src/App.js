import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/layout/NavBar';
// import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import CreateNewPassword from './pages/CreateNewPassword';
import './App.css';

const App = () => {
  return (
    <div>
      
        <Router>
          <NavBar />
          <Routes>
            {/* <Route path='/' element={<Home/>} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
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
