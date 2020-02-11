import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

const SideNav = () => {

    return (
        <Router>
            <React.Fragment>
                <div className="bg-dark ml-3 mb-1 sidenav-tittle">
                    Categories
                </div>
                <div className="ml-3 bg-white">
                    <a href='/products'>
                        <button className='mb-1 sidenav-links bg-white font-weight-light'>
                            <div className="span fas fa-list mr-1"></div>
                            Products
                        </button>
                    </a >
                    <a href='/hostels'>
                        <button className='mb-1 sidenav-links bg-white font-weight-light'>
                            <i className='fas fa-bed mr-1'></i>
                            Hostels
                        </button>
                    </a >
                    < a href='/hire'>
                        <button className='mb-1 sidenav-links text-left bg-white font-weight-light'>
                            <div className="d-flex">
                                <span className="fas fa-hands-helping mr-1 mt-2"></span>
                                <div className="text-center">Hiring and Leasing</div>
                            </div>

                        </button>
                    </a >
                </div>
            </React.Fragment>
        </Router>

    );

}

export default SideNav;