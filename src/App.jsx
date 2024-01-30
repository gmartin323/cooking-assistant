import React from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"

import InitialPage from './pages/InitialPage'
import Cook from './pages/Cook'
import Shop from './pages/Shop'
import Cupboard from './pages/Cupboard'
 
import Layout from './components/Layout'

export default function App() {

  return (
    <HashRouter>
      <Routes>
        <Route index element={<InitialPage />}/>
        <Route path="/" element={<Layout />}>
          <Route path="/cook" element={<Cook />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/cupboard" element={<Cupboard />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

