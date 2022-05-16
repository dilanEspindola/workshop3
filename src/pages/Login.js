import React from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const { signInWithGoogle, signInWithFacebook, userState, loading } = useAuth()

  const loginFacebook = async() =>{
    await signInWithFacebook()
    console.log(userState)
  }

  return (
    <div>
      <button onClick={loginFacebook}>
        Facebook
      </button>
    </div>
  )
}

export default Login
