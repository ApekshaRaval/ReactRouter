import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const NavBar = () => {
/**
 * If the link is active, make the font bold and remove the underline. Otherwise, make the font normal
 * and add an underline.
 */
// const navLinkStyles = ({isActive}) =>{
//   return {
//     forntWeight :isActive?'bold':'normal',
//     textDecoration :isActive?'none':'underline',
//   }
// }
const auth = useAuth()

  return (
    <>
  <header>
    <a href="#">Logo</a>
    <nav>
        
            <NavLink  to="/">Home</NavLink>
            <NavLink  to="/about">About</NavLink>
           <NavLink  to="/contact">Contact</NavLink>
            <NavLink  to="/profile">Profile</NavLink>
            {
              !auth.user && (<NavLink  to="/login">Login</NavLink>)
            }
     
    </nav>
  </header>
  </>
  )
}

export default NavBar
