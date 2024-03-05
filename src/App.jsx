import React, { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"

const InitialPage = lazy(()=> import ('./pages/InitialPage'))
const Recipes = lazy(()=> import ('./pages/Recipes'))
const Recipe = lazy(()=> import ('./pages/Recipe'))
const Cook = lazy(()=> import ('./pages/Cook'))
const Shop = lazy(()=> import ('./pages/Shop'))
const Cupboard = lazy(()=> import ('./pages/Cupboard'))

import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'
import ScrollToTop from './utilities/scrollToTop'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
          <Suspense fallback={<div className='page-container'><LoadingSpinner /></div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<InitialPage />}/>
                  <Route path="/recipes" element={<Recipes />}/>
                  <Route path="/recipes/:name/:id" element={<Recipe />}/>
                  <Route path="/cook" element={<Cook />}/>
                  <Route path="/shop" element={<Shop />}/>
                  <Route path="/cupboard" element={<Cupboard />}/>
              </Route>
            </Routes>
          </Suspense>
      </HashRouter>
  )
}
