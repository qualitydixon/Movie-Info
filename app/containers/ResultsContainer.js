import React, { PropTypes, Component } from 'react'
import Results from '../components/Results'
import { getMovies, getDetails } from '../utils/api'

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      movieData: {},
      modalOpen: false,
      modalData: {},
    }
  }
  componentDidMount() {
    this.makeRequest(this.props.routeParams.searchString)
  }
  makeRequest(searchString) {
    getMovies(searchString).then((data) => {
      this.setState({
        movieData: data,
        isLoading: false,
      })
    })
  }
  makeDetailsRequest(movie) {
    getDetails(movie).then((data) => {
      this.setState({
        modalOpen: true,
        modalData: data,
      })
    })
  }
  closeModal() {
    this.setState({
      modalOpen: false,
    })
  }
  render() {
    return (
      <div>
        <Results
          isLoading={this.state.isLoading}
          searchString={this.props.routeParams.searchString}
          movieData={this.state.movieData}
          makeDetailsRequest={(movie) => this.makeDetailsRequest(movie)}
          modalOpen={this.state.modalOpen}
          closeModal={() => this.closeModal()}
          modalData={this.state.modalData}
        />
      </div>
    )
  }
}

ResultsContainer.propTypes = {
  routeParams: PropTypes.object.isRequired,
}
