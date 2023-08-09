import Fastify from 'fastify'
import { Handler, HttpServer } from '.'

export class HttpServerImpl implements HttpServer {
  private app = Fastify()

  public async on(
    method: string,
    url: string,
    handler: Handler,
  ): Promise<void> {
    return this.app[method](url, handler)
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
