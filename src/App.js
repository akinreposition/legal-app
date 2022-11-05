import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import CreateNewPassword from './pages/CreateNewPassword';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/createnewpassword' element={<CreateNewPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
