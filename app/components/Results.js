var React = require('react');
var PropTypes = React.PropTypes;

function ListItem (props) {
      return (
          <li style={{animationDelay: (2+(props.idx*10)/100) + 's'}} className="card" onClick={props.getDetails}>
            <img src={props.movie.Poster}/>
            <div className="info">
            <div> {props.movie.Title} </div>
            </div> 
          </li>
      )
}

function ResultsUI (props) {
    return (
        
        <ul className="list">
            {props.movieData.Search.map(function (movie, idx) {
                return <ListItem key={movie.imdbID} idx={idx} movie={movie} getDetails={props.getDetails.bind(null, movie.imdbID)} />
            })}
         </ul>
         
    )
};

function Results (props) {
    return props.isLoading === true 
        ? <div className='loading'> Loading </div>
        : <ResultsUI movieData={props.movieData} getDetails={props.getDetails} />
};

module.exports = Results;