export interface HttpServer<RouteHandlerMethod> {
  on(method: string, url: string, handler: RouteHandlerMethod): Promise<void>
  listen(port: number): Promise<void>
}
