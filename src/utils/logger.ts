const logMessage = (prefix: string) => (message: string) => console.log(`[${prefix}] ${message}`);

export const getLogger = (prefix: string) => ({
  log: logMessage(prefix),
});
