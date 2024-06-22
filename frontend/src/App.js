import React from 'react'
import "./App.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import ForgetPassword from './pages/forgotPassword/ForgetPassword'
import ConfirmPassword from './pages/forgotPassword/ConfirmPassword'
import NewPassword from './pages/forgotPassword/NewPassword'
import Footer from './common/footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route path='/confirm-password' element={<ConfirmPassword />} />
        <Route path='/new-password' element={<NewPassword />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
