import { d as defineEventHandler, r as readBody, s as setResponseStatus } from '../../_/index.mjs';
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
const index = defineEventHandler(async (event) => {
  var _a;
  const method = ((_a = event.node.req.method) == null ? void 0 : _a.toUpperCase()) || "GET";
  if (method === "GET") {
    const list = await readData();
    return list;
  }
  if (method === "POST") {
    const body = await readBody(event);
    const list = await readData();
    const id = String(Date.now());
    const now = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").substring(0, 19);
    const item = {
      id,
      title: body.title || "No title",
      description: body.description || "",
      priority: body.priority || "Normal",
      createdAt: body.createdAt || now
    };
    list.push(item);
    await writeData(list);
    setResponseStatus(event, 201);
    return item;
  }
  setResponseStatus(event, 405);
  return { error: "Method not allowed" };
});

export { index as default };
