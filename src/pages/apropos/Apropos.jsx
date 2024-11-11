import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import aboutBanner from '../../assets/About_Banner.webp'
import Collapse from '../../components/collapse/Collapse'
import AboutItems from "../../assets/data/about"
import "./apropos.css"
import { useEffect, useState } from 'react'
const Apropos = () => {
    const Items = AboutItems()
    const [mode, setMode] = useState('desktop')
    useEffect(() => {
        if (window.innerWidth >= 700) {
            setMode('desktop')
        } else {
            setMode('mobile')
        }
        window.addEventListener('resize', onResize)

        function onResize() {
            if (window.innerWidth >= 700 && mode === 'mobile') {
                setMode('desktop')
            }
            if (window.innerWidth < 700 && mode === 'desktop') {
                setMode('mobile')
            }
        }
    }, [mode])
    return (
        <div className='aboutPage'>

            <Header />
            <div className="aboutBanner">
                <img
                    className="aboutBannerImg"
                    src={aboutBanner}
                    alt="Paysage montagneux ensoleillé"
                />
            </div>
            {Items.map((item) => {
                return <Collapse title={item.title} texte={item.text} key={item.id} />
            })}
            <Footer />

        </div>
    )
}

export default Apropos
