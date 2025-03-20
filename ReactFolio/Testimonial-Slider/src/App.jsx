import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import reviews from './data'
import Testimonials from './components/Testimonials'
import Card from './components/Card'

const App = () => {
  return(
    <div className = "flex flex-col w-[100vh] h-[100vh] justify-center items-center bg-gray-200">
      <div className = "text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-[1/5] mt-1"></div>
        <Testimonials reviews = {reviews}/>
      </div>
    </div>
  )
}

export default App
