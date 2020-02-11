import React, { useState, useEffect } from 'react'//react state management hooks
import {
    API_URL_FOR_HOSTELS,
    FETCH_FAIL_MESSAGE,
    SINGLE_ROOM_HOSTEL,
    BEDSITTER_HOSTEL,
    SERVER_CONNECTON_FAIL
} from '../../Constants'
import hostel1 from '../../StaticFiles/hostel1.png'
import hostel2 from '../../StaticFiles/hostel2.png'
import axios from 'axios' //promise based library that enable API calls from front end to the server

const Hostels = ({ match }) => {
    const [state, setState] = useState({ hostel: [] })
    const [isLoading, setIsLoading] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        axios.get(API_URL_FOR_HOSTELS)//retrieve a list of hostels from the hostel API endpoint
            .then(response => {
                setState({ hostel: response.data })//store the retrieved list to hostel list
                setIsSuccess(!isSuccess)//toggle isSuccess to true
            })
            .catch(err => console.error(FETCH_FAIL_MESSAGE, err))
            .finally(() => setIsLoading(!isLoading))
    }, [])//the empty array is passed as the 2nd arg to stop an infinite loop of API calls once a single one is executed

    const renderedContent = isLoading ?//determine the content to be rendered based on the isLoading state
        (
            // render loading spinner while the axios.get method is still running ie isLoading is true
            <div className='text-center'>
                <div className='spinner-grow m-5 text-primary' />
            </div>
        ) : isSuccess && state.hostel ? //if axios.get executes without an exception and the response has some data
            (
                <section className='container my-2'>
                    <ul className='breadcrumb breadcrumb-nav'>
                        <li className="breadcrumb-item mb-1"> <a href="/">Home</a></li>
                        <li className="breadcrumb-item active">Hostels</li>

                    </ul>

                    <div className='row ml-2'>
                        <div className="bg-info text-white ml-2 col-md-12">
                            Trending Selections
                         </div>
                        <div className='col-md-12'>
                            <div className="row">
                                {state.hostel.map((item, index) => {//creaate a new array and loop thro' it
                                    const content = isSuccess &&
                                        (<div key={index} className="col-md-3 col-sm-6 my-2 ">
                                            <div className="card">
                                                <img className="card-img-top" id={index} src={index === 0 || index === 2 ? hostel1 : hostel2} alt={item.hostel_name} />
                                                <div className="card-body">
                                                    <i className="card-title text-success">{item.hostel_name}</i>
                                                    <p className="card-text details my-0">{item.brief_description}</p>
                                                    <p className='my-0 details'>Location: {item.location ? item.location : 'Not Provided'}</p>
                                                    <h6>Rent Ksh: {new Intl.NumberFormat().format(Number(item.hostel_rent))}</h6>
                                                    <a href={match.url + `/${item.hostel_id}`}>
                                                        <button id={item.hostel_id} type="button"
                                                            className="btn btn-outline-info btn-sm float-right btn-no-outline">
                                                            See more
                                                    </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    return content
                                })}
                            </div>
                            <div className="row">

                                <div className="bg-info text-light ml-2 my-1 col-md-12">
                                    Single Rooms
                            </div>
                                {
                                    state.hostel.map((item, index) => {
                                        const content = (item.hostel_type === SINGLE_ROOM_HOSTEL && isSuccess) &&//if the hostel type is single room render it 
                                            (<div key={index} className="col-md-3 col-sm-6 my-2 ">
                                                <div className="card">
                                                    <img className="card-img-top" id={index} src={index === 0 || index === 2 ? hostel1 : hostel2} alt={item.hostel_name} />
                                                    <div className="card-body">
                                                        <i className="card-title text-success">{item.hostel_name}</i>
                                                        <p className="card-text details my-0">{item.brief_description}</p>
                                                        <p className='my-0'>Location: {item.location}</p>
                                                        <h6>Rent Ksh: {new Intl.NumberFormat().format(Number(item.hostel_rent))}</h6>
                                                        <a href={match.url + `/${item.hostel_id}`}>
                                                            <button id={item.hostel_id} type="button"
                                                                className="btn btn-outline-info btn-sm float-right btn-no-outline">
                                                                See more
                                                    </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        return content//render the value of contents
                                    })
                                }

                            </div>
                            <div className="row">
                                <div className="bg-info text-white ml-2 col-md-12">
                                    Bedsitters Hostels
                            </div>

                                {
                                    state.hostel.map((item, index) => {
                                        const content = (item.hostel_type === BEDSITTER_HOSTEL && isSuccess) &&//if the hostel type is a bedsitter render it 
                                            (<div key={index} className="col-md-3 col-sm-6 my-2 ">
                                                <div className="card">
                                                    <img className="card-img-top" id={index} src={index === 0 || index === 2 ? hostel1 : hostel2} alt={item.hostel_name} />
                                                    <div className="card-body">
                                                        <i className="card-title text-success">{item.hostel_name}</i>
                                                        <p className="card-text details my-0">{item.brief_description}</p>
                                                        <p className='my-0'>Location: {item.location}</p>
                                                        <h6>Rent Ksh: {new Intl.NumberFormat().format(Number(item.hostel_rent))}</h6>
                                                        <a href={match.url + `/${item.hostel_id}`}>
                                                            <button id={item.hostel_id} type="button"
                                                                className="btn btn-outline-info btn-sm float-right btn-no-outline">
                                                                See more
                                                    </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        return content//render the value of contents
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </section>
            ) ://if no connection is established to the server, then render connection error message or No data found
            <div className="text-center">
                <i>{SERVER_CONNECTON_FAIL}</i>
            </div>
    return renderedContent
}
export default Hostels;


