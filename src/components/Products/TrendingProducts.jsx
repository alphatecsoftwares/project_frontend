import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


export const TrendingProducts = (props) => {

    console.log(props)

    return (
        <Fragment>
            <div className="mt-2">TRENDING ADS IN CATEGORIES</div>
            <hr className='mb-0' />
            <div className='row mt-0' >
                {props.products.map((item, index) => {
                    return (
                        <div key={index} className="col-md-4 col-sm-4">
                            <Link to={props.match.url + `/${item.product_id}`} className='listing-links' >
                                <div key={index} className="card my-2 border border-grey rounded-0">
                                    <img className="card-img-top my-2 item-product-wrapper mx-auto" id={index} src={props.laptop} alt={item.product_name} />
                                    <div className="card-body">
                                        <div className="text-center no-wrap">
                                            <i className="card-title text-success ">{item.product_name}</i>
                                        </div>
                                        <div className="card-text details my-0 no-wrap">{item.brief_description}</div>
                                        <div className='card-text font-weight-bold' >Ksh. {new Intl.NumberFormat().format(Number(item.discounted_price))}</div>
                                        <div className="card-text text-muted"> <del>Ksh. {new Intl.NumberFormat().format(Number(item.actual_price))}</del></div>
                                        <div className='d-block'>
                                            <div>Place</div>
                                            <div className='float-right'>Date</div>
                                        </div>
                                    </div>
                                </div>
                            </Link >
                        </div>

                    )
                })
                }
            </div>
        </Fragment>
    );
};