const tokenCache: { [key: string]: string } = {}

const login = (username: string): string => {
  const token = Date.now().toString()
  tokenCache[token] = username
  return token
}

export default {
  login
}
