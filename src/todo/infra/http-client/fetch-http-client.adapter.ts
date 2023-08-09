import { HttpClient } from '@/core/infra/http-client'
import { Todo } from '../../application/interfaces/todo'

export class FetchHttpClientAdapter implements HttpClient {
  constructor(private baseURL: string) {}

  public async post<PostType>(endpoint: string, data: PostType): Promise<Todo> {
    try {
      console.log({ endpoint })
      const response = await fetch(this.fullEndpoint(endpoint), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      return response.json()
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw error
    }
  }

  private fullEndpoint(endpoint: string) {
    return this.baseURL + endpoint
  }

  public async getAll(endpoint: string): Promise<Todo[]> {
    return this.performGet(endpoint)
  }

  private async performGet(endpoint: string) {
    const response = await fetch(this.fullEndpoint(endpoint))
    return response.json()
  }

  public async get(endpoint: string): Promise<Todo> {
    return this.performGet(endpoint)
  }
}
