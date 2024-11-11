import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//Components
import CardItems from '../../assets/data/logements'
import Vector from '../../assets/Vector.svg'

//Style
import './carousel.css'

const Carousel = () => {
    const { id } = useParams()
    const foundItems = CardItems.find((object) => object.id === id)
    const pictures = foundItems.pictures

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1)
    }

    return (
        <div className="carousel">
            {pictures.length > 1 ? (
                <>
                    <button className="prevVector">
                        <img src={Vector} onClick={prevSlide} alt="Fleche vers la gauche" />
                    </button>
                    <button className="nextVector">
                        <img src={Vector} onClick={nextSlide} alt="Fleche vers la droite" />
                    </button>
                </>
            ) : null}

            {pictures.map((img, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            <img
                                src={img}
                                alt="Affichage du logement"
                                className="carouselImage"
                            />
                        )}
                        {index === current && (
                            <strong className="carouselNumber">
                                {current + 1}/{pictures.length}
                            </strong>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel
