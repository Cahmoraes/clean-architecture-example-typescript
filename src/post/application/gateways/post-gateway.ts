import { Post } from '../interfaces/post'

export type CreatePostProps = Omit<Post, 'id'>

export interface PostGateway {
  todos(): Promise<Post[]>
  create(aPostDTO: CreatePostProps): Promise<Post>
}
