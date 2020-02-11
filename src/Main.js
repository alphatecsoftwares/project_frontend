import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Footer } from './components/Home/Footer'
import Navbar from './components/Home/Navbar'
import Home from './components/Home/Home'
import { Register } from './components/Authentication/Register'
import Login from './components/Authentication/Login'
import { ListServices } from './components/Hiring/ListServices'
import Hostels from './components/Hostel/Hostels'
import { ListProducts } from './components/Products/ListProducts'
import { PageNotFound } from './components/Home/PageNotFound';
import { HostelDetails } from './components/Hostel/Details'
import { CategoryListing } from './components/Home/CategoryListing'
import { ProductDetails } from './components/Products/ProductDetails'

const App = () => {

  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route strict exact path='/' component={Home} />
          <Route strict exact path='/register ' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/hire' component={ListServices} />
          <Route strict exact path='/hostels' component={Hostels} />
          <Route strict exact path='/products' component={ListProducts} />
          <Route strict exact path='/products/:id' component={ProductDetails} />
          <Route strict exact path='/hostels/:id' component={HostelDetails} />
          <Route strict exact path='/category/:id' component={CategoryListing} />
          <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  )
}
export default App
