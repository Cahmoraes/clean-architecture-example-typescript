import {
  CreatePostProps,
  PostGateway,
} from '../../application/gateways/post-gateway'
import { Post } from '../../application/dtos/post'
import { HttpClient } from '@/core/infra/http/http-client'

export const enum TodoEndpoint {
  GET_TODOS = '/todos?_limit=3',
  POST_TODOS = '/posts',
}

export class HttpPostGateway implements PostGateway {
  constructor(private httpClient: HttpClient) {}

  public async create(aTodoDTO: CreatePostProps): Promise<Post> {
    return this.httpClient.post(TodoEndpoint.POST_TODOS, aTodoDTO)
  }

  public todos(): Promise<Post[]> {
    return this.httpClient.getAll(TodoEndpoint.GET_TODOS)
  }
}
