import React, { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

import { API_URL_FOR_PRODUCTS, FETCH_FAIL_MESSAGE } from '../../Constants';
import laptop from '../../StaticFiles/laptop.jpg'
import { TrendingProducts } from './TrendingProducts';
import { ProductCategories } from './ProductCategories';


export const ListProducts = ({ match }) => {
    const [state, setProducts] = useState({ products: [] })

    useEffect(() => {
        Axios.get(API_URL_FOR_PRODUCTS)
            .then(response => setProducts({ products: response.data }))
            .catch(error => console.log(FETCH_FAIL_MESSAGE, error))
    }, [])
    return (
        <div className='row'>

            <div className="col-md-2">
                <div className="text-info ml-3">Categories</div>
                <div className='ml-2'>
                    <ProductCategories />
                </div> 
            </div>
            <div className="col-md-8">
                <TrendingProducts
                    products={state.products}
                    laptop={laptop}
                    match={match}
                />
            </div>

        </div>
    );
};