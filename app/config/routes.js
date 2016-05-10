import React from 'react'
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var hashHistory = ReactRouter.hashHistory
var IndexRoute = ReactRouter.IndexRoute
var MainContainer = require('../containers/MainContainer')
var HomeContainer = require('../containers/HomeContainer')
var ResultsContainer = require('../containers/ResultsContainer')

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path='/results/:searchString' component={ResultsContainer} />
    </Route>
  </Router>
)

module.exports = routes
