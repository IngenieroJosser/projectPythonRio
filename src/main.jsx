import React from 'react'
import ReactDOM from 'react-dom/client'
// import Login from './components/Login'
// import HeaderLog from './components/registry/HeaderLog'
// import Content from './components/registry/Content';
// import Signup from './components/registry/Signup';
// import PaymentPicker from './components/registry/PaymentPicker';
import MainSection from './components/mainSection/MainSection';
// import UserProfile from './components/Account/UserProfile';

import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login /> */}
    {/* <HeaderLog /> */}
    {/* <Content /> */}
    {/* <Signup /> */}
    {/* <PaymentPicker /> */}
    <MainSection />
    {/* <UserProfile /> */}
  </React.StrictMode>,
)
