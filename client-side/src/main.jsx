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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "addCOffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: 'signin',
        element: <Signin></Signin>
      },
      {
        path: 'signUp',
        element: <SIgnUp></SIgnUp>
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
