import React, { Fragment } from 'react';
import { API_URL_FOR_RECOMMENDED_HOSTELS, FETCH_FAIL_MESSAGE } from '../../Constants'
import { useState } from 'react';
import hostel1 from '../../StaticFiles/hostel1.png'
import { useEffect } from 'react';
import Axios from 'axios';

export const Recommended = (props) => {

    const [recommendations, setRecommendations] = useState({ hostels: [] })

    useEffect(() => {
        Axios.get(API_URL_FOR_RECOMMENDED_HOSTELS,
            {
                params: {
                    location: `${props.location}`,
                    id: `${props.id}`
                }
            })
            .then(respose => setRecommendations({ hostels: respose.data }))
            .catch(error => console.log(FETCH_FAIL_MESSAGE, error))
    }, [props.location, props.id])//re-run the get API call when either of these dependancies changes

    return (
        <div>
            <div className="col-md-7 d-block mx-auto">
                <div className="text-white bg-info">
                    <div className="ml-1 font-weight-bold my-2">Related Adverts</div>
                </div>
                <div className="row d-flex">
                    {recommendations.hostels.map((hostel, index) => {
                        return (
                            <Fragment key={index}>
                                <div className="col-md-3 m-2">
                                    <img src={hostel1} alt={hostel.hostel_name} />
                                </div>
                                <div className="col-md-8 ml-3">
                                    <h5 className="text-success">{hostel.hostel_name}</h5>
                                    <div className='d-flex'>
                                        <i>{hostel.detailed_description}</i>
                                        <i className='text-info'>{hostel.hostel_rent}</i>
                                    </div>
                                    <div className="d-flex">
                                        <div>
                                            <span className="fas fa-map-marker-alt" />
                                            <i className='ml-1'>{hostel.location}</i>
                                        </div>
                                        <a href={`/hostels/${hostel.hostel_id}`}>
                                            <button className="btn btn-outline-info btn-sm ml-5">View</button>
                                        </a>
                                    </div>


                                </div>
                            </Fragment>
                        )
                    })}

                </div>

            </div>
        </div>
    );
};