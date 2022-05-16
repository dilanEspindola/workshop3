import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  )
}

export default PublicRoutes
