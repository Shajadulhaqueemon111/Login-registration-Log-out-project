import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/ALL component/Home.jsx';
import Login from './Component/ALL component/Login.jsx';
import Register from './Component/ALL component/Register.jsx';
import AuthProvider from './Component/ALL component/AuthProvider.jsx';
import Order from './Component/ALL component/Order.jsx';
import PrivateRouter from './Component/ALL component/PrivateRouter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/Register',
        element:<Register></Register>
      },
      {
        path:'/order',
        element:<PrivateRouter><Order></Order></PrivateRouter>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
