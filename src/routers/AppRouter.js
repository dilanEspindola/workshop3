import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoutes/>}/>
        <Route path="*" element={<PublicRoutes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter