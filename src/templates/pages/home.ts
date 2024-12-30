import { html } from "@hono/hono/html";
import { wrapWithLayout } from "../layout.ts";

export function homePage() {
  return wrapWithLayout(html`<h1>Creators</h1>
    <p hx-get="/creators" hx-trigger="load">loading...</p>
    <p><a href="/login">Back</a></p>`);
}
