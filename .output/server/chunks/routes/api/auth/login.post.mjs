import { d as defineEventHandler, r as readBody, c as createError } from '../../../_/index.mjs';
import fs from 'node:fs';
import path from 'node:path';

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const logPath = path.resolve(process.cwd(), "login-logs.json");
  let logs = [];
  try {
    if (fs.existsSync(logPath)) {
      const content = fs.readFileSync(logPath, "utf-8");
      logs = JSON.parse(content);
    }
  } catch (e) {
  }
  const isSuccess = body.username === "admin" && body.password === "admin2134";
  logs.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    username: body.username,
    status: isSuccess ? "success" : "failed",
    ip: event.node.req.socket.remoteAddress
  });
  fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));
  if (!isSuccess) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid credentials"
    });
  }
  return { success: true, user: { name: "Admin User", username: "admin" } };
});

export { login_post as default };
