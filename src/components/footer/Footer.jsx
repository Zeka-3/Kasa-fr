import React from 'react'
import LogoWhite from '../../assets/White_Logo.svg'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={LogoWhite} alt="image de footer" />
            <p><span>©</span> 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
