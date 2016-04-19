var React = require('react');
var PropTypes = React.PropTypes;

function ListItem (props) {
      return (
          <li className="card">
            <img src={props.movie.Poster}/>
            <div> {props.movie.Title} </div> </li>
      )
}

function ResultsUI (props) {
    return (
        <ul className="list">
            {props.movieData.Search.map(function (movie) {
                return <ListItem key={movie.imdbID} movie={movie} />
            })}
         </ul>
    )
};

function Results (props) {
    return props.isLoading === true 
        ? <div> Loading </div>
        : <ResultsUI movieData={props.movieData} />
};

module.exports = Results;