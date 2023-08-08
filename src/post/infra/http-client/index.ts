export interface HttpClient<Type> {
  post<PostType>(endpoint: string, data: PostType): Promise<Type>
  get(endpoint: string): Promise<Type>
  getAll(endpoint: string): Promise<Type[]>
}
