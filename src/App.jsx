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
import { getRecipes } from './firebase'
import sortByName from './utilities/sortByName'

const RecipeDataContext = React.createContext()

export default function App() {

  const [recipes, setRecipes] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    async function loadRecipes() {
      setLoading(true)
      try {
        const data = await getRecipes()
        setRecipes(sortByName(data))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadRecipes()
    
  }, [])

  if (loading) {
    return <div className='page-container'><LoadingSpinner /></div>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  } 

  return (
    <HashRouter>
      <ScrollToTop />
          <Suspense fallback={<div className='page-container'><LoadingSpinner /></div>}>
            <RecipeDataContext.Provider value={recipes}>
              <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<InitialPage />}/>
                    <Route path="/recipes" element={<Recipes />}/>
                    <Route path="/recipes/:name" element={<Recipe />}/>
                    {/* <Route path="/recipes/:name/:id" element={<Recipe />}/>  */}
                    <Route path="/cook" element={<Cook />}/>
                    <Route path="/shop" element={<Shop />}/>
                    <Route path="/cupboard" element={<Cupboard />}/>
                </Route>
              </Routes>
            </RecipeDataContext.Provider>
          </Suspense>
      </HashRouter>
  )
}

export { RecipeDataContext }