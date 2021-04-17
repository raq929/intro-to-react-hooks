import fetch from 'node-fetch'

class GhibliApiService {
  static baseUrl = 'https://ghibliapi.herokuapp.com/films/';

  static getList = () => fetch(GhibliApiService.baseUrl).then(data => data.json())
}

export default GhibliApiService
