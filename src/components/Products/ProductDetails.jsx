import React, { useEffect, useState } from 'react'

import {
    API_URL_FOR_PRODUCTS,
    FETCH_FAIL_MESSAGE,
    STATUS_FAIL,
    STATUS_SUCCESS,
    PAGE_NOT_FOUND_MESSAGE
} from '../../Constants'

import hostel1 from '../../StaticFiles/hostel1.png'
import hostel2 from '../../StaticFiles/hostel2.png'
import image from '../../StaticFiles/laptop.jpg'

import Axios from 'axios';
import { SellerContact } from './SellerContact'

export const ProductDetails = ({ match }) => {

    const myImages = [hostel1, hostel2, image]
    const [state, setProducts] = useState({ products: [] })
    const [isLoading, setIsLoading] = useState(true)
    const [status, setStatus] = useState(STATUS_FAIL)
    const [imageIndex, setImageIndex] = useState(0)
    const [images] = useState({ images: myImages })

    useEffect(() => {
        console.log(match)
        Axios.get(API_URL_FOR_PRODUCTS + `/${match.params.id}`)
            .then(response => {
                setProducts({ products: response.data })
                setStatus(STATUS_SUCCESS)
                console.log(response.data)
            })
            .catch(error => console.log(FETCH_FAIL_MESSAGE, error))
            .finally(setIsLoading(false))
    }, [])

    const handleMouseOver = event => {
        setImageIndex(event.target.id)
    }

    const renderedContent = isLoading ? 'Loading data...' ://is API call execution terminated
        status.toUpperCase() === STATUS_SUCCESS ?//is status of the API call successful ie records were found
            (
                <div className="row justify-content-center my-5">
                    <div className="col-md-4">
                        <img className='my-1 d-block mx-auto img-detail'
                            src={images.images[imageIndex]}
                            alt={state.products.product_name} />
                        <div className="row ml-2">
                            {
                                images.images.map((element, index) => {
                                    const content = (
                                        <div key={index} className="ml-1">
                                            <img id={index} onMouseOver={handleMouseOver}
                                                className='img-thumbnail img-list border-0'
                                                src={element} alt={state.products.product_name} />
                                        </div>
                                    )
                                    return content
                                })

                            }
                        </div>
                    </div>
                    <SellerContact image={image} />
                </div>
            ) :
            (//No details for this item were found
                <div className="col-md-7 text-center bg-danger text-white offset-3 my-5">
                    <p>{PAGE_NOT_FOUND_MESSAGE}</p>
                </div>
            )
    return renderedContent

};