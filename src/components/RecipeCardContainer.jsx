import React from "react";
import RecipeCard from "./RecipeCard";
import { RecipeDataContext } from '../App'

export default function RecipeCardContainer() {

  const recipes = React.useContext(RecipeDataContext)

  return (
    <section className='recipe-card-container'>
      {recipes.map((recipe) => {
        return (
          <RecipeCard 
            recipe={recipe}
            key={recipe.id}
          />
        )
      })}
    </section>
  )
} 