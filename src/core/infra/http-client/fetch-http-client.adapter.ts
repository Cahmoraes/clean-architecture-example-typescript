import { HttpClient } from '@/core/infra/http-client'
import { Post } from '@/post/application/interfaces/post'

export class FetchHttpClientAdapter implements HttpClient {
  constructor(private baseURL: string) {}

  public async post<PostType>(endpoint: string, data: PostType): Promise<Post> {
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

  public async getAll(endpoint: string): Promise<Post[]> {
    return this.performGet(endpoint)
  }

  private async performGet(endpoint: string) {
    const response = await fetch(this.fullEndpoint(endpoint))
    return response.json()
  }

  public async get(endpoint: string): Promise<Post> {
    return this.performGet(endpoint)
  }
}
