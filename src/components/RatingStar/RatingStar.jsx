//utils
import React from 'react'

//Assets
import ColorStar from '../../assets/ColorStar.png'
import GreyStar from '../../assets/GreyStar.png'

//Function
function RatingStar(props) {
    let rateStar = props.rating

    const maxStar = 5
    const stars = []

    for (let i = 1; i < maxStar + 1; i++) {
        if (i <= rateStar) {
            stars.push(<img key={i} src={ColorStar} alt="étoile colorée" />)
        } else {
            stars.push(<img key={i} src={GreyStar} alt="étoile grisée" />)
        }
    }

    return <div className="starBloc">{stars}</div>
}

export default RatingStar