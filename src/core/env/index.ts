import { z } from 'zod'
import 'dotenv/config'

const environmentSchema = z.object({
  BASE_URL: z.string().url(),
  HTTP_CLIENT: z.enum(['AXIOS', 'FETCH', 'TEST']).default('AXIOS'),
  PRESENTER: z.enum(['JSON']).default('JSON'),
  PORT: z.coerce.number().default(3303),
})

const _env = environmentSchema.safeParse(process.env)
if (!_env.success) {
  console.error('⚠️ invalid environment variable', _env.error.format())
  throw new Error('Invalid environment variables.')
}

export const env = _env.data
