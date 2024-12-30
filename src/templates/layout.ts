import { html } from "@hono/hono/html";
import { HtmlEscapedString } from "@hono/hono/utils/html";

export function wrapWithLayout(inner: HtmlEscapedString | Promise<HtmlEscapedString>) {
  return html`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Discover Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://unpkg.com/htmx.org@2.0.4"
          integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+"
          crossorigin="anonymous"
        ></script>
      </head>
      <body hx-boost="true">
        ${inner}
      </body>
    </html>`;
}
