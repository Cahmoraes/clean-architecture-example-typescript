import { AxiosHttpClientAdapter } from '../axios-http-client.adapter'
import { CreateAxiosDefaults } from 'axios'
import { FetchHttpClientAdapter } from '../fetch-http-client.adapter'
import { HttpClient } from '..'
import { Todo } from '@/domain/todo/application/interfaces/todo'
import { env } from '@/core/env'
import { FakeHttpClientAdapter } from '../fake-http-client.adapter'

export type HttpClientFactoryProps = CreateAxiosDefaults & {
  baseURL: string
}

export const enum HttpClientTypes {
  AXIOS = 'AXIOS',
  FETCH = 'FETCH',
  TEST = 'TEST',
}

export class HttpClientFactory {
  static create(props: HttpClientFactoryProps): HttpClient<Todo> {
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
