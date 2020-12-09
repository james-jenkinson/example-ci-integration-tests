import cache from '../clients/redis'

const login = (username: string): string => {
  const token = Date.now().toString()
  const key = cacheKey(username)
  cache.set(key, token)

  return token
}

const cacheKey = (username: string): string =>
  `auth-token:${username}`

export default {
  login
}
