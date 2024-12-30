import { html } from "@hono/hono/html";
import { Creator } from "../../creator.ts";
import { wrapWithLayout } from "../layout.ts";
import { creatorsListTemplate } from "../creatorsList.ts";

export function creatorsPage(creators: Creator[]) {
  return wrapWithLayout(html`<h1>Creators</h1>
    ${creatorsListTemplate(creators)}
    <p><a href="/login">Back</a></p>`);
}
