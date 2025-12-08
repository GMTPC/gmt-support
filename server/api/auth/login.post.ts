import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Mock saving to file
  const logPath = path.resolve(process.cwd(), 'login-logs.json')
  
  let logs = []
  try {
    if (fs.existsSync(logPath)) {
      const content = fs.readFileSync(logPath, 'utf-8')
      logs = JSON.parse(content)
    }
  } catch (e) {
    // Ignore error if file doesn't exist or is invalid
  }
  
  const isSuccess = body.username === 'admin' && body.password === 'admin2134'

  logs.push({
    timestamp: new Date().toISOString(),
    username: body.username,
    status: isSuccess ? 'success' : 'failed',
    ip: event.node.req.socket.remoteAddress
  })
  
  fs.writeFileSync(logPath, JSON.stringify(logs, null, 2))
  
  if (!isSuccess) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials'
    })
  }

  return { success: true, user: { name: 'Admin User', username: 'admin' } }
})
