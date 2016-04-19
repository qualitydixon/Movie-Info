var React = require('react');
var Results = require('../components/Results');
var getMovies = require('../utils/api').getMovies;

var ResultsContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            movieData: {}
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
            });
        }.bind(this));
        
    },
    render: function () {
        return (
            <Results 
                isLoading={this.state.isLoading} 
                searchString={this.props.routeParams.searchString}
                movieData={this.state.movieData} />
        )
    }
    
});

module.exports = ResultsContainer;