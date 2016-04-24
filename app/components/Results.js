var React = require('react');
var PropTypes = React.PropTypes;
var Modal = require('react-modal');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const bd = {
    fontWeight: 'bold'
}

const addSpace = {
    marginTop: '10px'
}

function ListItem (props) {
      return (
          <li style={{animationDelay: (2+(props.idx*10)/100) + 's'}} className="card" onClick={props.makeDetailsRequest}>
            <img src={props.movie.Poster} className='listPoster' />
            <div className="info">
            <div> {props.movie.Title} </div>
            </div> 
          </li>
      )
}

function ModalUI (props) {
    return (
        <div className="modalContainer">
            <img src={props.modalData.Poster} className='modalPoster' />
            <div className='modalInfo'>
                <h2>{props.modalData.Title}</h2>
                <div>{props.modalData.Plot}</div>
                <ul style={addSpace}>
                    <li><span style={bd}>Starring:</span> {props.modalData.Actors}</li>
                    <li><span style={bd}>Release Date:</span> {props.modalData.Released}</li>
                    <li><span style={bd}>Genre:</span> {props.modalData.Genre}</li>
                </ul>
            </div>
        </div>
    )
}

function ResultsUI (props) {
    return (
        <div>
            <ul className="list">
                {props.movieData.Search.map(function (movie, idx) {
                    return <ListItem key={movie.imdbID} idx={idx} movie={movie} makeDetailsRequest={props.makeDetailsRequest.bind(null, movie.imdbID)} />
                })}
            </ul>
            <Modal
                isOpen={props.modalOpen}
                style={customStyles} 
                onRequestClose={props.closeModal} >
                <ModalUI modalData={props.modalData} />
            </Modal>
        </div>
    )
};

function Results (props) {
    return props.isLoading === true 
    ? <div className='loading'> Loading </div>
    : <ResultsUI 
        movieData={props.movieData} 
        makeDetailsRequest={props.makeDetailsRequest} 
        modalOpen={props.modalOpen}
        closeModal={props.closeModal} 
        modalData={props.modalData} />
};

module.exports = Results;