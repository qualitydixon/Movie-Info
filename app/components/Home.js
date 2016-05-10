import React, { PropTypes } from 'react'

function Home(props) {
  return (
    <div>
      <div className='home'>
        <h1> {'Enter a Movie Title'} </h1>
        <form onSubmit={props.onSubmitSearchString}>
          <div className='form-group' id='inputBox'>
            <input
              className='form-control'
              placeholder='Star Wars'
              type='text'
              onChange={props.onUpdateSearchString}
              value={props.searchString} 
            />
          </div>
          <div className='form-group btnCon' id='getWeatherBtn'>
            <button onClick={props.onSubmitSearchString} className='btn btn-lg btn-success getBtn'> {'Get Movies'} </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Home.propTypes = {
  onSubmitSearchString: PropTypes.func.isRequired,
  onUpdateSearchString: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
}
module.exports = Home
