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
  const id = event.context.params?.id
  if (!id) {
    setResponseStatus(event, 400)
    return { error: 'Missing id' }
  }

  const list = await readData()
  const idx = list.findIndex((i: any) => String(i.id) === String(id))
  if (idx === -1) {
    setResponseStatus(event, 404)
    return { error: 'Not found' }
  }

  if (method === 'GET') {
    return list[idx]
  }

  if (method === 'PUT' || method === 'PATCH') {
    const body = await readBody(event)
    const item = { ...list[idx], ...body }
    list[idx] = item
    await writeData(list)
    return item
  }

  if (method === 'DELETE') {
    const removed = list.splice(idx, 1)[0]
    await writeData(list)
    return { success: true, removed }
  }

  setResponseStatus(event, 405)
  return { error: 'Method not allowed' }
})
