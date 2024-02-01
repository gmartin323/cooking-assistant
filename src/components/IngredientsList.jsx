import React from 'react'

export default function IngredientsList( { ingredients } ) {

  return (
    <section className='ingredients-list-container'>
      {ingredients.map((ingredient)=> {
        return (
          <div className='ingredient'>
            <p className='ingredient-quantity'>{ingredient.quantity}</p>
            <p className='ingredient-name'>{ingredient.name}</p>
          </div>
        )
      })}    
    </section>
  )
}