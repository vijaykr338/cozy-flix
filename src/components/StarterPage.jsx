import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { AuthProvider } from './context/authContext'
import NavBar from './NavBar'

const StarterPage = () => {

  return (
    <AuthProvider>
     
      <SignUp></SignUp>
      
      
      
    </AuthProvider>
  )
}

export default StarterPage
