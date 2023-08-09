import 'dotenv/config'
import { env } from './core/env'
import { UseCaseFactory } from './core/application/factories/use-case-factory'
import { FastifyHttpServer } from './core/infra/http/http-server/fastify-http-server'
import { HttpGatewayFactory } from './core/infra/http/http-gateway/factory/http-gateway-factory'
import { HttpClientFactory } from './core/infra/http/http-client/factory/http-client-factory'
import { HttpController } from './core/infra/http/http-controller'

async function main() {
  const httpServer = new FastifyHttpServer()
  const httpClient = HttpClientFactory.create({ baseURL: env.BASE_URL })
  const httpGatewayFactory = new HttpGatewayFactory(httpClient)
  const useCaseFactory = new UseCaseFactory(httpGatewayFactory)
  new HttpController(httpServer, httpGatewayFactory, useCaseFactory)
  httpServer.listen(env.PORT)
}

main()
