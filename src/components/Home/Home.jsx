import React, { Fragment } from 'react'
import SideNav from './SideNav'
import { Carousel } from './Carousel'
import { Trending } from './Trending'
import { SubCategories } from './SubCategories'
import { RightNav } from './RightNav'

const Home = (props) => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 side">
                        <SideNav />
                    </div>
                    <div className="col-md-8 mt-2">
                        <Carousel />
                    </div>
                    <div className="col-md-2 bg-light">
                        <RightNav />
                    </div>
                </div>
            </div>
            <div>
                <section className='container  '>
                    <SubCategories />
                </section>
                <section>
                    <Trending />
                </section>
            </div>
        </Fragment>
    )

}

export default Home;