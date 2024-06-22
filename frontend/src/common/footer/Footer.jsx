import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <section>
            <nav className='footer_nav'>
                <div className="logo">
                    <h2>FASCO</h2>
                </div>

                <ul>
                    <li><NavLink>Contact</NavLink></li>
                    <li><NavLink>Support Center</NavLink></li>
                    <li><NavLink>Careers</NavLink></li>
                    <li><NavLink>Blog</NavLink></li>
                    <li><NavLink>FAQs</NavLink></li>
                </ul>
            </nav>

            <div className="copy">
                <p>Copyright © 2022 Xpro . All Rights Reseved.</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer