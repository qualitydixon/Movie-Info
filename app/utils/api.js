var axios = require('axios');

var _baseURL = 'https://www.omdbapi.com/?s=';
var _detailURL = 'https://www.omdbapi.com/?i=';
var _trailURL = '&y=&plot=short&r=json';
var _page2 = '&page=2';

function getMovies(searchString) {
    return axios.get(_baseURL + searchString + _trailURL)
        .then(function (movies1) {
          return axios.get(_baseURL + searchString + _trailURL + _page2)
            .then(function (movies2) {
              console.log(movies1.data.Search);
              return movies1.data.Search.concat(movies2.data.Search);
            })
      
    });
};

function getDetails(id) {
    return axios.get(_detailURL + id + _trailURL)
        .then(function (movie) {
      console.log(movie.data)
      return movie.data;
    });
}
module.exports = {
  getMovies: getMovies,
  getDetails: getDetails
};