import React, { Fragment } from 'react';
import '../../StaticFiles/main.css';
import Logo from '../../StaticFiles/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <Fragment >
            <div className='d-flex'>
                <h6 className='text-left mt-1 mr-3 contact'> To Advertise  Contact Us on +254721430298</h6>
                <a className='navactive' target='_blank' rel='noopener noreferrer' href="http://facebook.com/thegreat.philipp">
                    <span className="fab fa-facebook-f ml-1 mt-1 d-flex contact">
                    </span>
                </a>
                <a className='navactive' target='_blank' rel='noopener noreferrer' href="https://twitter.com/PhilipOfficiel">
                    <span className="fab fa-twitter d-flex mt-1 ml-2 twitter contact">
                    </span>
                </a>
            </div>
            <div>
                <nav className="navbar navbar-expand-md navbar-light  bg-info">

                    {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <img src={Logo} className='nav-logo' alt="logo" />
                    <a className="navbar-brand text-white" href="/">CBiz</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <form action="" className="form-inline">
                                <input className="form-control navsearch ml-5 input-sm" type='search' placeholder='Search...' />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="submit">
                                        <li className='fa fa-search nav-search text-white'></li>
                                    </button>
                                </span>

                            </form>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className='nav-link text-white' to='/login'>Login</Link>
                        </li>
                        <li className="nav-item  ">
                            <Link className='nav-link text-white' to='/register'>Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );

}

export default Navbar;