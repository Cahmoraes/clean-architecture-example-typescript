import { HttpClient } from '.'
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios'

export type AxiosHttpClientAdapterProps = CreateAxiosDefaults

export class AxiosHttpClientAdapter<Type> implements HttpClient<Type> {
  private readonly http: AxiosInstance

  constructor(props: AxiosHttpClientAdapterProps) {
    this.http = axios.create(props)
  }

  public async post<PostType>(endpoint: string, data: PostType): Promise<Type> {
    const result = await this.http.post(endpoint, data)
    return result.data
  }

  public async get(endpoint: string): Promise<Type> {
    return this.performGet(endpoint)
  }

  private async performGet(endpoint: string) {
    const response = await this.http.get(endpoint)
    return response.data
  }

  public async getAll(endpoint: string): Promise<Type[]> {
    return this.performGet(endpoint)
  }
}
