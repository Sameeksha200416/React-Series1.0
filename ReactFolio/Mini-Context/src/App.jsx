import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UserContext from './context'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
    <h1>React with Chai and share is important</h1>
    <Login />
    <Profile/>
    </UserContextProvider>
  )
    
}

export default App
