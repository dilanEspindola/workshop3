import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from '../components/Profile/Profile';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter