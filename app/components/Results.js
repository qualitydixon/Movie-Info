var React = require('react');
var PropTypes = React.PropTypes;

function ResultsUI (props) {
    return (
        <div> Your results! </div>
    )
};

function Results (props) {
    return props.isLoading === true 
        ? <div> Loading </div>
        : <ResultsUI movieData={props.movieData} />
};

module.exports = Results;