import config from 'config'
import redis from 'redis'

const cache = redis.createClient({
  host: config.get<string>('redis.host'),
  port: config.get<number>('redis.port')
})

export default cache
