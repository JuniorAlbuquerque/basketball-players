import { HttpClient } from '../../infra/services/api'

export class ApiPlayer {
  constructor() {
    this.httpClient = new HttpClient()
  }

  async getById(id) {
    try {
      const response = await this.httpClient.api.get(id)

      return response.data
    } catch (error) {
      return { error: 'Nenhum player encontrado' }
    }
  }
}
