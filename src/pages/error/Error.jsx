import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import "./error.css"


const Error = () => {
    return (
        <div>
            <Header />
            <div className="errorBloc">
                <strong>404</strong>
                <p>Oups! La page que vous demandez nexiste pas.</p>
                <Link to="/">Retourner à la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Error
