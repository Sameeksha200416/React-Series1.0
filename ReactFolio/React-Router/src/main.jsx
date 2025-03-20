// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { RouterProvider, Route,Routes } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import { createBrowserRouter } from 'react-router-dom'
// import React from 'react'
// import Contact from './components/Contact/Contact.jsx'
// import { createRoutesFromElements , router } from 'react-router-dom'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes> {/* Added Routes component */}
//       <Route path='/' element={<Layout />}>
//         <Route path='' element={<Home/>}/>
//         <Route path='about' element={<About/>}/>
//         <Route path='contact' element={<Contact/>}/>
//       </Route>
//     </Routes>
//   )
// )

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>,
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, Route} from 'react-router-dom' // Added Route import
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Contact from './components/Contact/Contact.jsx'
import { createRoutesFromElements } from 'react-router-dom' 
import User from './components/User/User.jsx' 
import Github,{ githubInfoLoader } from './components/Github/Github.jsx' // Import the loader function

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route 
        loader={githubInfoLoader} // Add the loader function here
        path='github' element={<Github/>}/>
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)