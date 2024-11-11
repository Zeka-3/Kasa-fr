import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/carousel/Carousel'
import cardItems from '../../assets/data/logements'
import "./logment.css"
import RatingStar from '../../components/RatingStar/RatingStar'
import Collapse from "../../components/collapse/Collapse"

const Logment = () => {
    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        const foundItem = cardItems.find((card) => card.id === id)

        setItem(foundItem)
    }, [id])
    console.log(item)
    if (!item) {
        console.log("Erreur : l'élément n'a pas été trouvé");
        return <p>Erreur : l'élément n'a pas été trouvé</p>; // Afficher un message si l'élément n'est pas trouvé
    }

    const listEquipments = item.equipments ? item.equipments.map((equipment) => (
        <li key={equipment}>{equipment}</li>
    )) : [];


    return (
        <div className="logementPage">
            <Header />
            <div className="logementBloc">
                <div className="carouselBloc">
                    <Carousel />
                </div>
                <div className="content">
                    <div className="leftBloc">
                        <div className="location">
                            <b>{item.title}</b>
                            <p>{item.location}</p>
                        </div>
                        <div className="tags">
                            <ul>
                                {item.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="rightBloc">
                        <div className="ratingBloc">
                            <RatingStar rating={item.rating} />
                        </div>

                        <div className="host">
                            <p>{item.host.name}</p>
                            <img src={item.host.picture} alt="host" />
                        </div>
                    </div>
                </div>
                <div className="descriptionBloc">
                    <Collapse texte={item.description} title="Description" />
                    <Collapse texte={listEquipments} title="Équipements" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Logment
