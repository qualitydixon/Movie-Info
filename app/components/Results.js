import React, { PropTypes } from 'react'
import Modal from 'react-modal'

const { object, number, func, bool } = PropTypes

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const bd = {
  fontWeight: 'bold',
}

const addSpace = {
  marginTop: '10px',
}

function ListItem(props) {
  const animationDelay = `${2 + (props.idx * 10) / 100}s`
  return (
    <li style={{ animationDelay }} className='card' onClick={props.makeDetailsRequest}>
      <img alt={'Poster'} src={props.movie.Poster} className='listPoster' />
      <div className='info'>
        <p> {props.movie.Title} </p>
      </div>
    </li>
  )
}

ListItem.propTypes = {
  makeDetailsRequest: func.isRequired,
  movie: object.isRequired,
  idx: number.isRequired,
}

function ModalUI(props) {
  return (
    <div className='modalContainer'>
      <img alt={'Poster'} src={props.modalData.Poster} className='modalPoster' />
      <div className='modalInfo'>
        <h2>{props.modalData.Title}</h2>
        <div>{props.modalData.Plot}</div>
        <ul style={addSpace}>
          <li><span style={bd}>{'Starring:'}</span> {props.modalData.Actors}</li>
          <li><span style={bd}>{'Release Date:'}</span> {props.modalData.Released}</li>
          <li><span style={bd}>{'Genre:'}</span> {props.modalData.Genre}</li>
        </ul>
      </div>
    </div>
  )
}

ModalUI.propTypes = {
  modalData: object.isRequired,
}


function Results(props) {
  return props.isLoading === true
    ? <div className='loading'> {'Loading'} </div>
    : <div>
      <ul className='list'>
        {props.movieData.map((movie, idx) =>
          <ListItem
            key={movie.imdbID} idx={idx} movie={movie}
            makeDetailsRequest={props.makeDetailsRequest.bind(null, movie.imdbID)}
          />
        )}
      </ul>
      <Modal
        isOpen={props.modalOpen}
        style={customStyles}
        closeTimeoutMS={150}
        onRequestClose={props.closeModal}
      >
        <ModalUI modalData={props.modalData} />
      </Modal>
    </div>
}

Results.propTypes = {
  isLoading: bool.isRequired,
  modalOpen: bool.isRequired,
  closeModal: func.isRequired,
  makeDetailsRequest: func.isRequired,
  movieData: PropTypes.any.isRequired,
  modalData: object.isRequired,
}

module.exports = Results
