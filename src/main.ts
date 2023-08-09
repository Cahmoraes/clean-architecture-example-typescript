import 'dotenv/config'
import { env } from './core/env'
import { UseCaseFactory } from './core/application/factories/use-case-factory'
import { HttpGatewayFactory } from './core/infra/http-gateway/factory/http-gateway-factory'
import { HttpClientFactory } from './core/infra/http-client/factory/http-client-factory'
import { HttpServerImpl } from './core/infra/http-server/http-server-impl'
import { HttpController } from './core/infra/http-controller'

async function main() {
  const httpServer = new HttpServerImpl()
  const httpClient = HttpClientFactory.create({ baseURL: env.BASE_URL })
  const httpGatewayFactory = new HttpGatewayFactory(httpClient)
  const useCaseFactory = new UseCaseFactory(httpGatewayFactory)
  new HttpController(httpServer, httpGatewayFactory, useCaseFactory)
  httpServer.listen(env.PORT)
}

main()
