import { GatewayFactory } from '../factories/gateway-factory'
import { PostGateway } from '../gateways/post-gateway'
import { Post } from '../dtos/post'

export interface CreatePostInput {
  title: string
  body: string
  userId: number
}

export interface CreatePostOutput {
  post: Post
}

export class CreatePost {
  private postGateway: PostGateway

  constructor(gatewayFactory: GatewayFactory) {
    this.postGateway = gatewayFactory.createPostGateway()
  }

  public async execute(input: CreatePostInput): Promise<CreatePostOutput> {
    const post = await this.postGateway.create(input)
    return { post }
  }
}
