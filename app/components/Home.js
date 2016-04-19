var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div className='home'>
      <div>
        <h1> Enter a Movie Title </h1>
        <form onSubmit={this.props.onSubmitSearchString}>
            <div className='form-group' id='inputBox'>
                <input 
                    className='form-control' 
                    placeholder='Star Wars' 
                    type='text'
                    onChange={this.props.onUpdateSearchString} 
                    value={this.props.searchString} />
             </div>
            <div className='form-group' id='getWeatherBtn'>
                <button onClick={this.props.onSubmitSearchString} className="btn getBtn"> Get Movies </button>
            </div>
        </form>
        </div>
      </div>
    )
  }
});

module.exports = Home;