import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../StaticFiles/main.css';
import { Fragment } from 'react';
export const Footer = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row bg-dark footer">
                    <div className="col-md-4  col-sm-12">
                        <ul className='list-group'>
                            <h6 className='list-group-items'>Who We Are</h6>
                            <p className='contact'>CBiz is a one stop online shop for student needs.
                                 We mantain a comprehensive database of goods
                                 and services tailored for students
                            </p>
                        </ul>
                    </div>
                    <span className="border-left mt-2 mb-2"></span>
                    <div className="col-md-4 text-center col-sm-12">
                        <ul className='list-group contact'>
                            <div className='list-group-items'>Single Rooms</div>
                            <div className='list-group-items'>Electronics</div>
                            <div className='list-group-items'>Smartphones</div>
                            <div className='list-group-items'>Groceries and Food</div>
                            <div className='list-group-items'>Electronics Leasing</div>
                            <div className='list-group-items'>Stationeries and Books</div>
                        </ul>
                    </div>
                    <span className="border-left mt-2 mb-2"></span>
                    <div className="col-md-3 col-sm-12">
                        <ul className='list-group'>
                            <h6 className='list-group-items mt-4'>Subscribe To Our Newsletter</h6>
                            <div className="d-flex">
                                <input className='mb-2 rounded' type='text' placeholder='Email' />
                                <button className="btn btn-outline-info btn-sm m-2">Subscribe</button>
                            </div>
                        </ul>
                    </div>
                    <div className="col-md-1"></div>

                </div>

            </div>

        </Fragment>
    );

}
