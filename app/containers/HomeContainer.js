import React, { Component } from 'react'
import Home from '../components/Home'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
    }
  }
  handleUpdateSearchString(e) {
    this.setState({
      searchString: e.target.value,
    })
  }
  handleSubmitSearchString(e) {
    e.preventDefault()
    this.setState({
      searchString: '',
    })
    this.context.router.push(`/results/${this.state.searchString}`)
  }
  render() {
    return (
      <Home
        onSubmitSearchString={(e) => this.handleSubmitSearchString(e)}
        onUpdateSearchString={(e) => this.handleUpdateSearchString(e)}
        searchString={this.state.searchString}
      />
    )
  }
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
