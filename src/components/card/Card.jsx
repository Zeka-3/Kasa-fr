import React from 'react'

import cardItems from '../../assets/data/logements'
import "./card.css"
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <div className="cardList">
            {cardItems.map((item) => {
                return (
                    <Link key={item.id} to={`/logement/${item.id}`}>
                        <div className="card">
                            <img src={item.cover} alt={item.title} />
                            <b>{item.title}</b>
                        </div>
                    </Link>
                )
            })}
        </div>

    )
}

export default Card
