import React from 'react'
import Header from './components/headerComponent/header'
import About from './components/aboutComponent/about'
import Footer from './components/footerComponent/footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pagesComponent/homePageComponent/homePage'
import RbgMutualFunds from './components/rbgMutualfundsComponent/rbgMutual/rbgMutual'

export default function App() {
  return (
    <div>
      <Header />
     
      
<Routes>

  <Route path="/rbgMutualFunds" element={<RbgMutualFunds />} />
  <Route path="/about" element={<About />} />
  <Route path="/" element={<HomePage />} />
  


</Routes>

<Footer/>

    </div>
  )
}
