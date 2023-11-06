import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from './components/Login'
import Content from './components/registry/Content';
import Signup from './components/registry/Signup';
import PaymentPicker from './components/registry/PaymentPicker';
import MainSection from './components/mainSection/MainSection';
import UserProfile from './components/Account/UserProfile';

import './css/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSection />,
  },
  {
    path: "/Profile",
    element: <UserProfile />,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Content",
    element: <Content />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/PaymentPicker",
    element: <PaymentPicker />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
