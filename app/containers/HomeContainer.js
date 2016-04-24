var React = require('react');
var Home = require('../components/Home');
var getMovies = require('../utils/api').getMovies;

var HomeContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            searchString: ''
        }
    },
    handleUpdateSearchString: function(e) {
      this.setState({
          searchString: e.target.value
      });  
    },
    handleSubmitSearchString: function (e) {
        e.preventDefault();
        var searchString = this.state.searchString;
        this.setState({
            searchString: ''
        });
        this.context.router.push('/results/' + this.state.searchString)
    },
    render: function() {
        return (
            <Home
                onSubmitSearchString={this.handleSubmitSearchString}
                onUpdateSearchString={this.handleUpdateSearchString}
                searchString={this.state.searchString} />
        )
    }
})

module.exports = HomeContainer;