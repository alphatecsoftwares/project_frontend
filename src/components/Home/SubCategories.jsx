// @flow 
import React from 'react';
import { useState } from 'react';
import Laptop from '../../StaticFiles/laptop.jpg';
import hostel1 from '../../StaticFiles/hostel1.png'
import { useEffect } from 'react';
import Axios from 'axios';
import { API_URL_FOR_CATEGORIES } from '../../Constants';


export const SubCategories = (props) => {

    const [subCategories, setSubCategories] = useState({ items: [] })
    const categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category A', 'Category B', 'Category C', 'Category D']

    useEffect(() => {
        Axios.get(API_URL_FOR_CATEGORIES)
            .then(response => setSubCategories({ items: response.data }))
            .catch(error => console.log('Error encountered while fetching sub categories', error))
    }, [])
    return (
        <div>
            <div className="row">
                <div className='font-weight-bold'>Shop by Category</div>
            </div>
            <div className="row ml-2">
                {categories.map((item, index) => {
                    return (
                        <div key={index} className="col-md-2 my-2">
                            <div className='text-center'>
                                <a href={`/category/${item}`}>
                                    <img key={index} className='img-size border border-info rounded-circle categories-custom' src={hostel1} alt={item} />
                                </a>
                            </div>
                            <div className='text-center'>
                                <span key={index}>{item}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};