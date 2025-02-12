import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Layout from './components/Layout.jsx';
import Signin from './components/Signin.jsx';
import SIgnUp from './components/SIgnUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://m-56-coffee-server.vercel.app/coffee')
      },
      {
        path: "addCOffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://m-56-coffee-server.vercel.app/coffee/${params.id}`),
      },
      {
        path: 'signin',
        element: <Signin></Signin>
      },
      {
        path: 'signUp',
        element: <SIgnUp></SIgnUp>
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: () => fetch('https://m-56-coffee-server.vercel.app/users')
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
