import { d as defineEventHandler, s as setResponseStatus, r as readBody } from '../../../_/index.mjs';
import { promises } from 'fs';
import { join } from 'path';

const DATA_PATH = join(process.cwd(), "data", "tickets.json");
async function readData() {
  try {
    const raw = await promises.readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw || "[]");
  } catch (e) {
    return [];
  }
}
async function writeData(data) {
  await promises.mkdir(join(process.cwd(), "data"), { recursive: true });
  await promises.writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}
const _id_ = defineEventHandler(async (event) => {
  var _a, _b;
  const method = ((_a = event.node.req.method) == null ? void 0 : _a.toUpperCase()) || "GET";
  const id = (_b = event.context.params) == null ? void 0 : _b.id;
  if (!id) {
    setResponseStatus(event, 400);
    return { error: "Missing id" };
  }
  const list = await readData();
  const idx = list.findIndex((i) => String(i.id) === String(id));
  if (idx === -1) {
    setResponseStatus(event, 404);
    return { error: "Not found" };
  }
  if (method === "GET") {
    return list[idx];
  }
  if (method === "PUT" || method === "PATCH") {
    const body = await readBody(event);
    const item = { ...list[idx], ...body };
    list[idx] = item;
    await writeData(list);
    return item;
  }
  if (method === "DELETE") {
    const removed = list.splice(idx, 1)[0];
    await writeData(list);
    return { success: true, removed };
  }
  setResponseStatus(event, 405);
  return { error: "Method not allowed" };
});

export { _id_ as default };
