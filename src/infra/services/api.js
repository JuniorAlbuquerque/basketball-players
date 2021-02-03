import axios from 'axios'

export class HttpClient {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.balldontlie.io/api/v1/players/',
    })
  }
}
