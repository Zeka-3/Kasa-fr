import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css"
const Nav = () => {
    return (
        < div className="nav-container" >
            < nav >
                < ul >
                    < li >
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'activated' : 'link')}
                            end
                        >
                            Accueil
                        </NavLink>
                    </li>
                    < li >
                        < NavLink
                            to="/apropos"
                            className={({ isActive }) => (isActive ? 'activated' : 'link')}
                            end
                        >
                            À propos de
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Nav
