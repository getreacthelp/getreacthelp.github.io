import React from 'react'
import { routingConstants } from '../utils/constants'
import {Navigate} from "react-router-dom"

function PageNotFound() {
    return (
        <Navigate to={routingConstants.HOME_PAGE}/>
    )
}

export default PageNotFound
