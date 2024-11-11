import React from 'react'
import Vector from "../../assets/Vector.svg"
import { useState } from 'react'
import "./collapse.css"
const Collapse = (props) => {
    const [display, setDisplay] = useState('none')
    const [isActive, setIsActive] = useState('')
    const [rotate, setRotate] = useState('180deg')
    function inputDropPanel() {
        setIsActive(isActive === '' ? 'active' : '')
        setRotate(rotate === '180deg' ? '0deg' : '180deg')
        setDisplay(display === 'block' ? 'none' : 'block')
    }
    return (

        <div className="dropPanel">
            <div className="dropPanel-Block" onClick={inputDropPanel}>
                <h1 id="title">{props.title}</h1>
                <button>
                    <img
                        className="Vector"
                        src={Vector}
                        style={{ rotate: `${rotate}` }}
                        alt="chevron"
                    />
                </button>
            </div>
            <div
                className={`text ${isActive}`}
                key={props.id}
                style={{ display: `${display}` }}
            >
                {props.texte}
            </div>
        </div>

    )
}

export default Collapse
