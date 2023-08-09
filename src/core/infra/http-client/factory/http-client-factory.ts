import { AxiosHttpClientAdapter } from '../axios-http-client.adapter'
import { CreateAxiosDefaults } from 'axios'
import { FetchHttpClientAdapter } from '../fetch-http-client.adapter'
import { env } from '@/core/env'
import { FakeHttpClientAdapter } from '../fake-http-client.adapter'
import { HttpClient } from '@/core/infra/http-client'

export type HttpClientFactoryProps = CreateAxiosDefaults & {
  baseURL: string
}

export const enum HttpClientTypes {
  AXIOS = 'AXIOS',
  FETCH = 'FETCH',
  TEST = 'TEST',
}

export class HttpClientFactory {
  private constructor() {
    throw new Error('Should not instantiate HttpClientFactory')
  }

  static create(props: HttpClientFactoryProps): HttpClient {
    switch (env.HTTP_CLIENT) {
      case HttpClientTypes.FETCH:
        return new FetchHttpClientAdapter(props.baseURL)
      case HttpClientTypes.TEST:
        return new FakeHttpClientAdapter()
      default:
        return new AxiosHttpClientAdapter(props)
    }
  }
}
