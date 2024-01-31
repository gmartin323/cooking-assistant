import React from 'react'
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className='header'>
      <Link to="/">Cooking Assistant</Link>
      <nav>
        <Link className="home-btn" to="/recipes">Recipes</Link>
        <span className='nav-divider'>|</span>
        <NavLink to="/cook" >Cook</NavLink>
        <span className='nav-divider'>|</span>
        <NavLink to="/cupboard" >Cupboard</NavLink>
        <span className='nav-divider'>|</span>
        <NavLink to="/shop" >Shop</NavLink>
      </nav>
    </header>
  )
}