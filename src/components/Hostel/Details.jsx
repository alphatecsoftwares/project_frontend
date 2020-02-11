import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';//promise based  API

import hostel1 from '../../StaticFiles/hostel1.png'
import hostel2 from '../../StaticFiles/hostel2.png'
import image from '../../StaticFiles/laptop.jpg'
import { Recommended } from './Recommended'

import {
    API_URL_FOR_HOSTELS,
    STATUS_SUCCESS,
    STATUS_FAIL,
    FETCH_FAIL_MESSAGE,
    PAGE_NOT_FOUND_MESSAGE,
    MONTH_NAMES
} from '../../Constants';

export const HostelDetails = ({ match }) => {

    //useState hooks to set details for various items
    const [state, setHostelDetail] = useState({ hostel: [] })
    const [status, setStatus] = useState(STATUS_FAIL)
    const myarray = [hostel1, hostel2, image]
    const [images] = useState({ images: myarray })
    const [imageIndex, setImageIndex] = useState(0)
    const rating = [1, 2, 3, 4]
    const [isLoading, setIsLoading] = useState(true)


    //convert date string frm API to JS date object
    let postDate = new Date(state.hostel.date_posted)
    let dateDiff = Math.abs((new Date() - postDate) / 3600000)
    let datePosted = `${postDate.getDate()} ${MONTH_NAMES[postDate.getMonth()]} ${postDate.getFullYear()}`

    let hostelRent = new Intl.NumberFormat().format(Number(state.hostel.hostel_rent))//format the rent for readability

    const handleMouseOver = e => {
        setImageIndex(e.target.id)
    }

    const displayedPostTime = () => {
        const timeNow = new Date()
        const timeDifference = Math.ceil((timeNow - postDate) / 3600000)//convert to hours
        const timeFromMidnight = Math.ceil((timeNow - new Date().setHours(0, 0, 0, 0)) / 3600000)
        const x = timeDifference - timeFromMidnight
        const displayedTime = (x <= 24 && x > 0) ? 'Yesterday' :
            (x <= 24 && x >= 0) ? 'Today' : x < 0 ? `Today` : datePosted
        return displayedTime
    }

    //the useEffect hook to fetch hostel details once the component is mounted
    useEffect(() => {
        axios.get(API_URL_FOR_HOSTELS + `/${match.params.id}`)//fetch details of a particular hostel
            .then(response => {
                setHostelDetail({ hostel: response.data })//store the response data in hostel object
                setStatus(response.statusText)
            })
            .catch(error => console.log(FETCH_FAIL_MESSAGE, error))
            .finally(() => setIsLoading(false))
    }, [match])//run useEffect when match changes

    const renderedContent = !isLoading ?//render hostel details once the get API call finishes executing
        (
            <Fragment>
                {
                    status.toUpperCase() === STATUS_SUCCESS ?//if details are available, render them
                        (
                            <div>
                                <div className="container">
                                    <div className="row justify-content-center my-5">
                                        <div className="col-md-4 bg-white">

                                            <img className='my-1 d-block mx-auto img-detail'
                                                src={images.images[imageIndex]}
                                                alt={state.hostel.hostel_name} />
                                            <div className="row ml-2">
                                                {
                                                    images.images.map((element, index) => {
                                                        const content = (
                                                            <div key={index} className="ml-1">
                                                                <img id={index} onMouseOver={handleMouseOver}
                                                                    className='img-thumbnail img-list border-0'
                                                                    src={element} alt={state.hostel.hostel_name} />
                                                            </div>
                                                        )
                                                        return content
                                                    })

                                                }
                                            </div>
                                            <div className="text-center m-0">
                                                <h4 className='text-primary'>{state.hostel.hostel_name}</h4>
                                            </div>
                                            <div className='d-flex'>
                                                <span className='fas fa-map-marker-alt mt-1 ml-2 text-info' />
                                                <i className='ml-1 disabled'>{state.hostel.location}</i>
                                                <span className='fas fa-clock my-2 ml-4 text-info' />
                                                <i className='ml-1 mt-1' >{`Posted ${displayedPostTime()}`}</i>
                                            </div>
                                            <div className="d-flex" >
                                                <span className="fas fa-eye text-info ml-2 mt-1"></span>
                                                <i className='ml-1'>3 times</i>
                                            </div>
                                            <hr className='bg-danger' />
                                            <p className='m-0'><b>Price:</b>  {hostelRent}</p>
                                            <p className='m-0'><b>Description</b> </p>
                                            <p className='mb-3'>{state.hostel.detailed_description}</p>
                                            <p>Rating:
                                                {
                                                    rating.map((index) => {
                                                        return <span key={index} className="fas fa-star text-warning" />
                                                    })

                                                }
                                            </p>
                                            {/* DETAILS OF THE HOSTEL IN INSTANCE*/}
                                            <div className="text-info font-weight-bold">Details</div>
                                            <div className="row d-flex">
                                                <div className="col-md-6 font-weight-bold">Hostel size:</div>
                                                <div>{` ${state.hostel.hostel_length} by ${state.hostel.hostel_width} feet`}</div>
                                            </div>
                                            <div className="row d-flex">
                                                <div className="col-md-6 font-weight-bold">Hostel Type</div>
                                                <div>{`${state.hostel.hostel_type}`}</div>
                                            </div>
                                            <div className="row d-flex ">
                                                <div className="col-md-6 font-weight-bold">Payment Mode</div>
                                                <div>{` ${state.hostel.hostel_payment_mode}`}</div>
                                            </div>
                                            <div className="row d-flex ">
                                                <div className="col-md-6 font-weight-bold">Electricity</div>
                                                <div>{`${state.hostel.electricity_payment}`}</div>
                                            </div>
                                            <div className="row d-flex">
                                                <div className="col-md-6 font-weight-bold">Floor Finishing</div>
                                                <div>{`${state.hostel.floor_finishing}`}</div>
                                            </div>
                                            <div className="row d-flex">
                                                <div className="col-md-6 font-weight-bold">Bed Provision</div>
                                                <div>{`${state.hostel.bed_provided ? 'YES' : 'NO'}`}</div>
                                            </div>
                                            <div className="row d-flex">
                                                <div className="col-md-6 font-weight-bold">Distance from campus</div>
                                                <div>{`${state.hostel.distance_from_campus > 1 ? state.hostel.distance_from_campus + ` KMs` :
                                                    state.hostel.distance_from_campus + ` KM`}`}
                                                </div>
                                            </div>
                                            <div className="row d-flex">
                                                <div className="col-md-6 font-weight-bold">Deposit during holiday</div>
                                                <div>{`${state.hostel.holiday_time_deposit_required ? 'YES' : 'NO'}`}</div>
                                            </div>
                                            {/* END OF HOSTEL DETAILS */}



                                        </div>

                                        <div className="col-md-3 bg-white ml-1 text-center">
                                            <div className="text-white bg-info">
                                                <b>Owner Details</b>
                                            </div>
                                            <div className='text-center'>
                                                <img className='rounded-circle my-1 user-profile'
                                                    src={image} alt='Profile' />
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
                                    </div>
                                </div>
                                <div className="text-center my-3">
                                    <div className="text-info">
                                        Write a review
                                   </div>
                                    <textarea className='border rounded' name="review" id="review" cols="50" rows="3"
                                        placeholder='Write you comment here' />
                                    <div>
                                        <select name="rating" id="rating" className='my-2 border-info'>
                                            <option value="0">Select a rating</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button className="btn btn-outline-info ml-2 btn-sm">
                                            Comment
                                 </button>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-info'>
                                        <span className="fas fa-language">Comments</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-7 d-block mx-auto">
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img className='rounded-circle user-profile2'
                                                    src={image} alt={state.hostel.hostel_name} />
                                                <div className="text-info">
                                                    Philip Opuka
                                                 </div>
                                            </div>
                                            <div className="col-md-6 d-flex">
                                                <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, odio.</i>
                                                <div className="col-md-3 d-flex">
                                                    {rating.map((rate, index) => {
                                                        return <i key={index} className='fas fa-star mt-3 text-warning' />
                                                    })}
                                                    <i className='text-info mt-3 ml-3'>5/5</i>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div>
                                    {/* provide some recommendations based on for instance price of the current item */}
                                    <Recommended location={state.hostel.location} id={state.hostel.hostel_id} />
                                </div>
                            </div>
                        ) ://if the details for the given item aer not available render content not found
                        (
                            <div className="col-md-7 text-center bg-danger text-white offset-3 my-5">
                                <p>{PAGE_NOT_FOUND_MESSAGE}</p>
                            </div>
                        )
                }
            </Fragment>
        )
        ://display a loading a spinner whilst axios.get method is still running
        (
            <div className="container">
                <div className='spinner-div '>
                    <div className="text-center mt-5">
                        <span className="spinner-grow text-success spinner"></span>
                    </div>
                </div>
            </div>

        )
    return renderedContent
};