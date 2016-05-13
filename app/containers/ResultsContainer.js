import React, { PropTypes } from 'react'
import Results from '../components/Results'
import { getMovies, getDetails } from '../utils/api'

const ResultsContainer = React.createClass({
  propTypes: {
    routeParams: PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      isLoading: true,
      movieData: {},
      modalOpen: false,
      modalData: {},
    }
  },
  componentDidMount() {
    this.makeRequest(this.props.routeParams.searchString)
  },
  makeRequest(searchString) {
    getMovies(searchString).then((data) => {
      this.setState({
        movieData: data,
        isLoading: false,
      })
    })
  },
  makeDetailsRequest(movie) {
    getDetails(movie).then((data) => {
      this.setState({
        modalOpen: true,
        modalData: data,
      })
    })
  },
  closeModal() {
    this.setState({
      modalOpen: false,
    })
  },
  render() {
    return (
      <div>
        <Results
          isLoading={this.state.isLoading}
          searchString={this.props.routeParams.searchString}
          movieData={this.state.movieData}
          makeDetailsRequest={this.makeDetailsRequest}
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal}
          modalData={this.state.modalData}
        />
      </div>
    )
  },
})

module.exports = ResultsContainer
