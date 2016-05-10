import React from 'react'
import Home from '../components/Home'

const HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      searchString: '',
    }
  },
  handleUpdateSearchString(e) {
    this.setState({
      searchString: e.target.value,
    })
  },
  handleSubmitSearchString(e) {
    e.preventDefault()
    this.setState({
      searchString: '',
    })
    this.context.router.push(`/results/${this.state.searchString}`)
  },
  render() {
    return (
      <Home
        onSubmitSearchString={this.handleSubmitSearchString}
        onUpdateSearchString={this.handleUpdateSearchString}
        searchString={this.state.searchString} />
    )
  },
})

module.exports = HomeContainer
