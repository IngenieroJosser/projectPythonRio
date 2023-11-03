import React from 'react'
import ReactDOM from 'react-dom/client'
// import Login from './components/Login'
import HeaderLog from './components/registry/HeaderLog'
import Content from './components/registry/Content';

import './scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login /> */}
    <HeaderLog />
    <Content />
  </React.StrictMode>,
)
