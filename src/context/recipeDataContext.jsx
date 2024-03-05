import React, { createContext, useContext, useState } from 'react'
import { getRecipes } from '../firebase'
import sortByName from '../utilities/sortByName'

export const RecipeDataContext = createContext(null)

export default function RecipeDataContextProvider({ children }) {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    async function loadRecipes() {
      setLoading(true)
      try {
        const localData = JSON.parse(localStorage.getItem('items'))
        if(localData) {
          setRecipes(localData)
        } else {
          const data = await getRecipes()
          setRecipes(sortByName(data))
          localStorage.setItem('recipes', JSON.stringify(recipes))
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    console.log("contextData is reloading")
    loadRecipes()
    
  }, [])

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //    setItems(items);
  //   }
  // }, []);

  return (
    <RecipeDataContext.Provider
      value={{
        recipes,
        setRecipes,
        loading,
        error
      }}
    >
      {children}
    </RecipeDataContext.Provider>
  )
}

export function useRecipeDataContext() {
  const context = useContext(RecipeDataContext)
  if (!context) {
    throw new Error(
      "useRecipeDataContext must be used within a RecipeDataContextProvider"
    )
  }
  return context
}