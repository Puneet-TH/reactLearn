import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import Layout from './layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/ContactUs.jsx'

// both can be used to route webpages to each other react router is a library used in react app or project to navigate and route your pages 

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "About",
//         element: <About/>
//       },
//       {
//         path: "ContactUs",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    // path='to this jsx component in the folder' element={<"renering component folder name/>}
    <Route path='/' element={<Layout />}>
     <Route path='' element={<Home/>} />
     <Route path='about' element={<About/>} />
     <Route path='ContactUs' element={<Contact/>} />
     <Route path='User/:userid' element={<User/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
