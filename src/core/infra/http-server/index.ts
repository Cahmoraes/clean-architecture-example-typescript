export type Handler = (req: Request, res: Response) => void

export interface HttpServer {
  on(method: string, url: string, handler: Handler): Promise<void>
  listen(port: number): Promise<void>
}
