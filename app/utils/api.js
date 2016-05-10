import axios from 'axios'

const baseURL = 'https://www.omdbapi.com/?s='
const detailURL = 'https://www.omdbapi.com/?i='
const trailURL = '&y=&plot=short&r=json'
const page2 = '&page=2'

function getMovies(searchString) {
  return axios.get(baseURL + searchString + trailURL)
          .then((movies1) => axios.get(baseURL + searchString + trailURL + page2)
            .then((movies2) => movies1.data.Search.concat(movies2.data.Search)))
}

function getDetails(id) {
  return axios.get(detailURL + id + trailURL)
          .then((movie) => movie.data)
}
module.exports = {
  getMovies,
  getDetails,
}
