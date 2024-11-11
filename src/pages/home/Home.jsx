import React from 'react'
import Header from '../../components/header/Header'
import homeBanner from '../../assets/Home_Banner.webp'
import "./home.css"
import Card from '../../components/card/Card'
import Footer from '../../components/footer/Footer'
const Home = () => {
    return (
        <div className='homePage'>
            <Header />
            <div className='homeBanner'>
                <p>
                    Chez vous, partout et ailleurs
                </p>
                <img src={homeBanner} alt="Home-Banner" className='homeBannerImg' />
            </div>
            <Card />
            <Footer />

        </div>
    )
}

export default Home
