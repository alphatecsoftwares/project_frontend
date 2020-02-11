// @flow 
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { API_URL_FOR_SERVICES } from '../../Constants'

export const ListServices = (props) => {
    const [state, setState] = useState({ products: [] })

    useEffect(() => {
        axios.get(API_URL_FOR_SERVICES)
            .then(response => setState({ products: response.data }))
            .catch(error => console.log('Error while fetching data', error))
    })
    return (
        <div>
            <h1>Hello from Services component</h1>
        </div>
    );
};