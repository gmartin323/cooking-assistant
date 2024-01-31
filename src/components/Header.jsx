import React from 'react'
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className='header'>
      <Link to="/">Cooking Assistant</Link>
      <nav>
        <NavLink to="/cook" >Cook</NavLink>
        <span className='nav-divider'>|</span>
        <Link className="home-btn" to="">Home</Link>
        <span className='nav-divider'>|</span>
        <NavLink to="/shop" >Shop</NavLink>
      </nav>
    </header>
  )
}