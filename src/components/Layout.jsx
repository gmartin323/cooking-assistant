import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import RecipeDataContextProvider from '../context/recipeDataContext'


export default function Layout() {
  return (
    <div className="site-wrapper">
      <RecipeDataContextProvider>
        <main>
          <Header />
          <Outlet />
        </main>
      </RecipeDataContextProvider>
    </div>
  )
}