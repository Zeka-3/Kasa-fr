import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
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
