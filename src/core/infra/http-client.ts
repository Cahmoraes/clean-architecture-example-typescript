export interface HttpClient {
  post<PostType>(endpoint: string, data: PostType): Promise<any>
  get(endpoint: string): Promise<any>
  getAll(endpoint: string): Promise<any[]>
}
