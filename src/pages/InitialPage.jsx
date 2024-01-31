import React from 'react'
import { Link } from 'react-router-dom'
import AddToCupboardBtn from '../components/AddToCupboardBtn'
import CheckCupboard from '../components/CheckCupboard'
 
export default function InitialPage() {
  return (
    <div className='page-container'>
      <h1>Homepage</h1>
      {/* <div className="choice-container">
        <Link to="/cook">Cook</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <AddToCupboardBtn />
      <CheckCupboard /> */}
    </div>
  )
}