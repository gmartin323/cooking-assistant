import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeCardContainer( props ) {

  return (

  <section className='recipe-card-container'>
    {props.recipes.map((recipe) => {
      
      
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