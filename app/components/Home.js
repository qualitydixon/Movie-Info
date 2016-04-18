var React = require('react');
require('../stylesheets/main.css');
var Home = React.createClass({
  render: function () {
    return (
      <div className='home'>
      <div>
        <h1> Enter a Movie Title </h1>
        <form onSubmit={this.props.onSubmitCity}>
            <div className='form-group' id='inputBox'>
                <input 
                    className='form-control' 
                    placeholder='Star Wars' 
                    type='text'
                    onChange={this.props.onUpdateCity} 
                    value={this.props.city} />
             </div>
            <div className='form-group' id='getWeatherBtn'>
                <button onClick={this.props.onSubmitCity} className="btn getBtn"> Get Movies </button>
            </div>
        </form>
        </div>
      </div>
    )
  }
});

module.exports = Home;