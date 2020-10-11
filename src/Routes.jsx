import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'
import Confirmation from './pages/Confirmation/Confirmation'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/confirmation" component={Confirmation} />
    </BrowserRouter>
  )
}

export default Routes
