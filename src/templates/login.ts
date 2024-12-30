import { html } from "@hono/hono/html";
import { wrapWithLayout } from "./layout.ts";

export function loginLayout() {
  return wrapWithLayout(html`
    <h1>Are you a creator or user?</h1>
    <p><a href="/creators">User</button></p>
    <p><a href="/login/creators">Creator</button></p>
  `);
}
