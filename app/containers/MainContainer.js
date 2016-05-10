import React, { PropTypes } from 'react'
require('../stylesheets/main.less')

const MainContainer = React.createClass({
  propTypes: {
    children: PropTypes.node.isRequired,
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  },
})

module.exports = MainContainer
