import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Detail from './page3/Detail.jsx'
import Category from './page2/Category.jsx'
import Payment from './page4/Payment.jsx'
import Content from './components/content/Content.jsx'

// Router creation syntaxes

// 1st way
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Content />
//       },
//       {
//         path: "carcategories",
//         element: <Category />
//       },
//       {
//         path: "cardetails",
//         element: <Detail />
//       },
//       {
//         path: "registerinfo",
//         element: <Payment />
//       }
//     ]
//   }
// ])

// 2nd way 

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element = {<Layout />} >
<Route path='' element = {<Content />}></Route>
<Route path='car-categories' element = {<Category />}></Route>
<Route path='car-details' element = {<Detail />}></Route>
<Route path='register-info' element = {<Payment />}></Route>
  </Route>
)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
