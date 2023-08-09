import Fastify, { RouteHandlerMethod } from 'fastify'
import { HttpServer } from '.'

export const enum HTTP_METHODS {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

export class FastifyHttpServer implements HttpServer<RouteHandlerMethod> {
  private app = Fastify()

  public async on(
    method: HTTP_METHODS,
    url: string,
    handler: RouteHandlerMethod,
  ): Promise<void> {
    this.app[method](url, handler)
  }

  public async listen(port: number): Promise<void> {
    try {
      await this.app.listen({ port })
      console.log('server listening')
    } catch (error) {
      console.error(error)
    }
  }
}
