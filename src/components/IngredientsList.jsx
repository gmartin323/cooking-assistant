import React from 'react'

export default function IngredientsList( { ingredients } ) {

  return (
    <section className='ingredients-list-container'>
      <h2 className='ingredient-list-heading'>Ingredients</h2>
      <ul className='ingredients-list'></ul>
      {ingredients.map((ingredient)=> {
        return (
          <li key={ingredient.name} className='ingredient'>
            <p className='ingredient-quantity'>{ingredient.quantity}</p>
            <p className='ingredient-name'>{ingredient.name}{ingredient.instruction ? ", " : ""}<span className='ingredient-instruction'>{ingredient.instruction}
              </span></p>
          </li>
        )
      })}    
    </section>
  )
}