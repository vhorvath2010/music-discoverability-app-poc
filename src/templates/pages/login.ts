import { html } from "@hono/hono/html";
import { wrapWithLayout } from "../layout.ts";

export function loginPage() {
  return wrapWithLayout(html`<h1>Are you a creator or user?</h1>
    <p><a href="/login/creators">Creator</button></p>
    <p><a href="/home">User</button></p>`);
}
