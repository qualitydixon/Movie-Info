var axios = require('axios');

var _baseURL = 'https://www.omdbapi.com/?s=';
var _trailURL = '&y=&plot=short&r=json';

function getMovies(searchString) {
    return axios.get(_baseURL + searchString + _trailURL)
        .then(function (movies) {
      console.log(movies.data)
      return movies.data;
    });
};

module.exports = {
  getMovies: getMovies
};