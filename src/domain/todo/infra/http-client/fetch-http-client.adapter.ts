import { HttpClient } from '.'
import { Todo } from '../../application/interfaces/todo'

export class FetchHttpClientAdapter implements HttpClient<Todo> {
  constructor(private baseURL: string) {}

  public async getAll(endpoint: string): Promise<Todo[]> {
    return this.performGet(endpoint)
  }

  private async performGet(endpoint: string) {
    console.log(this.baseURL + endpoint)
    const response = await fetch(this.baseURL + endpoint)
    return response.json()
  }

  public async get(endpoint: string): Promise<Todo> {
    return this.performGet(endpoint)
  }
}
