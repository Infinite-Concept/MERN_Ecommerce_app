import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <section>
            <nav className='header_nav'>
                <div className="logo">
                    <h2>FASCO</h2>
                </div>

                <div className="navigation">
                    <ul>
                        <li> <NavLink>Home</NavLink></li>
                        <li> <NavLink>Shop</NavLink></li>
                        <li> <NavLink>About us</NavLink></li>
                        <li> <NavLink>Deals</NavLink></li>
                    </ul>

                    <button className='btn1'>Sign up</button>
                </div>
            </nav>
        </section>
    </header>
  )
}

export default Header