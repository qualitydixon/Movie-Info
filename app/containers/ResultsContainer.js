import React, { PropTypes } from 'react'
var Results = require('../components/Results')
var getMovies = require('../utils/api').getMovies
var getDetails = require('../utils/api').getDetails

var ResultsContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            movieData: {},
            modalOpen: false,
            modalData: {}
        }
    },
    componentDidMount: function () {
        this.makeRequest(this.props.routeParams.searchString)
    },
    makeRequest: function (searchString) {
        getMovies(searchString).then(function (data) {
            this.setState({
                movieData: data,
                isLoading: false,
            })
        }.bind(this))
        
    },
    makeDetailsRequest: function (movie) {
        getDetails(movie).then(function (data) {
            this.setState({
                modalOpen:true,
                modalData: data
            })
        }.bind(this))
    },
    closeModal: function () {
    this.setState({
        modalOpen: false
    })
    },
    render: function () {
        return (
            <Results 
                isLoading={this.state.isLoading} 
                searchString={this.props.routeParams.searchString}
                movieData={this.state.movieData} 
                makeDetailsRequest={this.makeDetailsRequest}
                modalOpen={this.state.modalOpen}
                closeModal={this.closeModal}
                modalData={this.state.modalData} />
        )
    } 
})

module.exports = ResultsContainer
