const logMessage = (prefix: string) => (message: string) => console.log(`[${prefix}] ${message}`)

interface Logger {
  log: (message: string) => void
}

export const getLogger = (prefix: string): Logger => ({
  log: logMessage(prefix)
})
