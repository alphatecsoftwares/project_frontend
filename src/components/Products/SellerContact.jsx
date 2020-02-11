import React from 'react';

export const SellerContact = (props) => {
    return (
        <div className="col-md-3 bg-white ml-1 text-center">
            <div className="text-white bg-info">
                <b>Owner Details</b>
            </div>
            <div className='text-center'>
                <img className='rounded-circle my-1 user-profile'
                    src={props.image} alt='Profile' />
                <div><b>Name Will Be Here</b></div>
            </div>
            <div className='row'>
                <div className="col-md-6 text-left contact">
                    Joined On: 3th Apr 2020
                                                 </div>
                <div className="col-md-6 contact">
                    Last Active:12th June 2020
                                                 </div>
                <div className=" text-center d-flex ml-3 contact">
                    <div>
                        <i>Verified via: </i>
                        <i className="fas fa-check-circle text-success mx-1"></i>
                        Phone
                                                    </div>
                    <div>
                        <i className="fas fa-check-circle text-success mx-1"></i>
                        Email
                                                    </div>
                </div>
            </div>
            <hr className='bg-danger' />
            <div className='text-left ml-1'>
                <div>
                    <span className='fas fa-phone'></span>
                    <span className="ml-1">+254721430298</span>
                </div>
            </div>
            <div className='text-center'>
                <button className="btn btn-outline-info my-2  ">
                    <span className="fas fa-comments text-primary mr-1" />
                    Start Chat
                                               </button>
            </div>
            <div className="text-center">
                <div className='m-1 text-info'>Contact via Email</div>
                <input type="text" placeholder='Your Name' className='m-1 border rounded text-center' />
                <input type="email" placeholder='Your Email' className='m-1 border rounded text-center' />
                <input type="tel" placeholder='Your Phone Number' className='m-1 border rounded text-center' />
                <textarea name="message" id="message" cols="25" rows="4"
                    placeholder='Message (Max. 500 characters)'
                    className='border rounded m-1'>
                </textarea>
                <button className="btn btn-danger m-1">
                    <i className="fas fa-envelope text-white mr-2"></i>
                    Send Email
                                                </button>
            </div>
            <div className="text-center">
                <div className="d-flex my-3 bg-light">
                    <div className="my-1">Share Ad</div>
                    <button className=" btn btn-outline-none">
                        <span className="share-links rounded-circle bg-info ml-2 my-1">
                            <i className="fab fa-facebook-f text-light mx-1 mt-2 "></i>
                        </span>
                    </button>
                    <button className="btn btn-outline-none">
                        <span className="share-links rounded-circle twitter-background ml-2 my-1">
                            <i className="fab fa-twitter  mt-2  text-light "></i>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <button className="btn btn-outline-warning btn-sm my-1">
                    <span className="fas fa-flag text-danger m-2" />
                    Report Fraud or Abuse
                                                 </button>
            </div>
        </div>
    );
};