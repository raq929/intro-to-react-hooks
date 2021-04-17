import fetch from 'node-fetch'

class GhibliApiService {
  static baseUrl = 'https://ghibliapi.herokuapp.com/films/';

  static getMovieList = () => fetch(GhibliApiService.baseUrl).then(data => data.json())

  static getMovie = (id) => fetch(`${GhibliApiService.baseUrl}/${id}`)
}

export default GhibliApiService
