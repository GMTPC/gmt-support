import { promises as fs } from 'fs'
import { readBody, setResponseStatus } from 'h3'
import { join } from 'path'

const DATA_PATH = join(process.cwd(), 'data', 'tickets.json')

async function readData() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8')
    return JSON.parse(raw || '[]')
  } catch (e) {
    return []
  }
}

async function writeData(data: any) {
  await fs.mkdir(join(process.cwd(), 'data'), { recursive: true })
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

export default defineEventHandler(async (event) => {
  const method = event.node.req.method?.toUpperCase() || 'GET'

  if (method === 'GET') {
    const list = await readData()
    return list
  }

  if (method === 'POST') {
    const body = await readBody(event)
    const list = await readData()
    const id = String(Date.now())
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19)
    const item = {
      id,
      title: body.title || 'No title',
      description: body.description || '',
      priority: body.priority || 'Normal',
      createdAt: body.createdAt || now,
    }
    list.push(item)
    await writeData(list)
    setResponseStatus(event, 201)
    return item
  }

  setResponseStatus(event, 405)
  return { error: 'Method not allowed' }
})
