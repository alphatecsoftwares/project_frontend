import React, { useState } from 'react';
import carousel1 from '../../StaticFiles/carousel3.jpg'
import carousel2 from '../../StaticFiles/carousel2.jpg'
import Img from '../../StaticFiles/vh.jpg'
import Laptop from '../../StaticFiles/laptop.jpg'


export const Carousel = (props) => {
    const carouselImages = [Img, carousel1, carousel2, Laptop]
    const [state] = useState(carouselImages)
    return (
        <div>
            <div className=' '>

                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {state.map((index) => {
                            return <li key={index} data-target="#myCarousel" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                        })}
                    </ol>
                    <div className="carousel-inner">
                        {state.map((image, index) => {
                            return <div key={index} className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                                <img className="max-height-25 carousel-img" src={image} alt='Carousel' />
                                <div className="carousel-caption">
                                    <h6>Slide {++index}</h6>
                                </div>
                            </div>
                        })}
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
};