const logMessage = (prefix: string) => (message: string) => console.log(`[${prefix}] ${message}`)

const logError = (prefix: string) => (message: string) => console.log(`[ERROR][${prefix}] ${message}`)

interface Logger {
  error: (message: string) => void
  log: (message: string) => void
}

export const getLogger = (prefix: string): Logger => ({
  error: logError(prefix),
  log: logMessage(prefix)
})
