import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Home from './Components/Common/Home';
import Login from './Features/Auth/Login';
import Join from './Features/Auth/Join';
import Reservation from './Features/Reservation/Reservation';
import ReservationList from './Features/Reservation/ReservationList';
import Mypage from './Features/User/Mypage';
import QnA from './Features/QnA/QnA';
import Leave from './Features/User/Leave';
import ForgotPassword from './Features/Auth/ForgotPassword';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/faq" element={<QnA />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/list" element={<ReservationList />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </div>
  ); 
}

export default App;