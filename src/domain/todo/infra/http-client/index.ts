export interface HttpClient<Type> {
  get(endpoint: string): Promise<Type>
  getAll(endpoint: string): Promise<Type[]>
}
