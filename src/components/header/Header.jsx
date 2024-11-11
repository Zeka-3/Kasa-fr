import React from 'react'
import './header.css'
import Logo from '../../assets/Logo.svg'
import Nav from '../nav/Nav'

const Header = () => {
    return (
        <div className="container" >
            <img className="logo" src={Logo} alt="Logo de Kasa"></img>
            <Nav />
        </div>
    )
}

export default Header
