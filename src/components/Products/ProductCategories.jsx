import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_URL_FOR_PRODUCT_CATEGORIES } from '../../Constants'
import Axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

export const ProductCategories = (props) => {

    const [state, setCategories] = useState({ categories: null })
    const [error, setError] = useState(true)
    const match = useRouteMatch()

    const category = [

        {

            name: 'philip',

        }
        ,

        {
            name: 'Alvin',
        }


    ]

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {
        Axios.get(API_URL_FOR_PRODUCT_CATEGORIES)
            .then(response => {
                setCategories({
                    categories: response.data
                })
                setError(!error)
            })
            .catch(error => setError(error))
    }

    const renderedContent = !error ? //if no errror occcurs whilst executing axios.get
        state.categories ?//check if there are categories returned and render them
            (<div className="row mt-2 ml-2">
                {
                    category.map((item, index) => {
                        return (
                            <div className="d-block">
                                <div class="btn-group dropright">
                                    <button type="button" class="btn btn-primary btn-sm dropdown-toggle m-0 " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {`${item.name}`}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a href={`${match.url}/${item.name}`} className="dropdown-item">{`${item.name}`}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            )
            ://if no categories are returned, this is rendered
            'No Categories'
        ://rendered this if an exception is encountered during axios.get
        'No Categories'
    return renderedContent


    // return (
    //     <div>
    //         <div class="btn-group">
    //             <button type="button" class="btn btn-danger">Action</button>
    //             <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                 <span class="sr-only">Toggle Dropdown</span>
    //             </button>
    //             <div class="dropdown-menu">
    //                 <a class="dropdown-item" href="#">Action</a>
    //                 <a class="dropdown-item" href="#">Another action</a>
    //                 <a class="dropdown-item" href="#">Something else here</a>
    //                 <div class="dropdown-divider"></div>
    //                 <a class="dropdown-item" href="#">Separated link</a>
    //             </div>
    //         </div>

    //     </div>
    // );
};