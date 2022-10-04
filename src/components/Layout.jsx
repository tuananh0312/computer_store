import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Routerslink from '../routes/Routers'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">
          <Routerslink />
        </div>
      </div>
      <Footer />
    </div>


  )
}

export default Layout