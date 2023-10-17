import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './pages/Home/Home.jsx'
import Products from './components/Products/Products.jsx'
import AddProduct from './components/Products/AddProduct.jsx'
import ProductDetails from './components/Products/ProductDetails.jsx'
import ProductUpdate from './components/Products/ProductUpdate.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Users from './pages/users/Users.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch(`http://localhost:5000/products`)
      },
      {
        path:'/products',
        element:<Products></Products>,
        loader: ()=> fetch(`http://localhost:5000/products`)
      }
    ]
  },
      {
        path:'/add-products',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/update-products/:id',
        element:<ProductUpdate></ProductUpdate>,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'/products-details/:id',
        element:<ProductDetails></ProductDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader: ()=> fetch(`http://localhost:5000/users`)
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
