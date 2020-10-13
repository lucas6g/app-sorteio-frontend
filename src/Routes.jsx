import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'
import Confirmation from './pages/Confirmation/Confirmation'
import Sortition from './pages/Sortition/Sortition'
import About from './pages/About/About'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/sortition" component={Sortition} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  )
}

export default Routes
