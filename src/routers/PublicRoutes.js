// Base
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
import Register from '../pages/Register'
import Login from '../pages/Login'
import Initial from '../pages/Initial'

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/initial" element={<Initial />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  )
}

export default PublicRoutes
