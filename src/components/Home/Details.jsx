import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL_FOR_HOSTELS } from '../../Constants'

export const Details = ({ match }) => {
    const [state, setState] = useState({ details: [] })
    useEffect(() => {
        axios.get(API_URL_FOR_HOSTELS + `/${match.params.id}`)
            .then((response) => setState({ details: response.data }))
            .catch(error => console.error('Error Occured', error))
    }, [match])
    return (
        <div>
            <h2>Details for Item {match.params.id} goes Here</h2>
        </div>
    )
}