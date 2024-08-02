import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubDataLoader } from './components/Github/Github.jsx'



// let router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children :[
//       {
//         path:'',
//         element:<Home />,
//       },{
//         path:'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])



let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route 
      loader={githubDataLoader}
      path='github' 
      element={< Github/>} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

 

  <React.StrictMode>
   
    <RouterProvider router={router}/>
  </React.StrictMode>
)
