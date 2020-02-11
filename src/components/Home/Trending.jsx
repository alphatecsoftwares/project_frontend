// @flow 
import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Laptop from '../../StaticFiles/laptop.jpg'
import axios from 'axios';
import { API_URL_FOR_TRENDING, FETCH_FAIL_MESSAGE } from '../../Constants'

export const Trending = (props) => {

    const [state, setTrends] = useState({ trends: [] })
    useEffect(() => {
        axios.get(API_URL_FOR_TRENDING)
            .then(response => setTrends({ trends: response.data }))
            .catch(error => console.log(FETCH_FAIL_MESSAGE, error))
    }, [])
    return (
        <Fragment>
            <div className='ml-3'>
                <div className='font-weight-bold'>Trending Today</div>
                <div className='row'>
                    {state.trends.map((trend, index) => {
                        return (
                            <div className="col-md-3">
                                <a href={`/hostels/${trend.product_name}`}>
                                    <img className='img-size rounded' src={Laptop} alt={trend.product_name}></img>
                                </a>
                                <h6 key={index}>{trend.product_name}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>

        </Fragment>
    );
};