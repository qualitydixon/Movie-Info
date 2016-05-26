import React, { PropTypes } from 'react'
import Navigation from '../components/Navigation'
require('../stylesheets/main.less')

function MainContainer(props) {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  )
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
module.exports = MainContainer
