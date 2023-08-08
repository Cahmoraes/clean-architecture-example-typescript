import { CreatePostProps } from '@/post/application/gateways/post-gateway'
import { HttpClient } from '.'
import { Post } from '../../application/interfaces/post'

const posts: Post[] = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
]

export class FakeHttpClientAdapter implements HttpClient<Post> {
  public async get(): Promise<Post> {
    return posts[0]
  }

  public async post<PostType>(_: string, data: PostType): Promise<Post> {
    this.isCreatePostDTO(data)
    posts.push({
      ...data,
      id: 3,
      completed: false,
    })
    return posts[this.getLastItem()]
  }

  private getLastItem(): number {
    return posts.length - 1
  }

  private isCreatePostDTO(
    anObject: unknown,
  ): asserts anObject is CreatePostProps {
    if (!(anObject instanceof Object)) throw Error('Invalid object')
    if (!Reflect.has(anObject, 'title')) throw Error('Invalid object')
    if (!Reflect.has(anObject, 'userId')) throw Error('Invalid object')
  }

  public async getAll(): Promise<Post[]> {
    return posts
  }
}
