import React from 'react'
import { createBrowserRouter } from 'react-router-dom' //une function pour creer un routor pour lie les pages entre elles
import Home from '../../pages/home/Home'
import Apropos from '../../pages/apropos/Apropos'
import Error from '../../pages/error/Error'
import Logment from '../../pages/logment/Logment'
const Router = createBrowserRouter
    ([
        {
            path: "/",
            element: <Home />
        }, {
            path: "/apropos",
            element: <Apropos />
        }, {
            path: "/*",
            element: <Error />
        }, {
            path: "/logement/:id",
            element: <Logment />
        },


    ])


export default Router
