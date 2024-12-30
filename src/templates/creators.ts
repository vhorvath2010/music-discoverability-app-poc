import { html } from "@hono/hono/html";
import { Creator } from "../business/creator.ts";
import { wrapWithLayout } from "./layout.ts";

interface CreatorsTemplateParams {
  creators: Creator[];
  query?: string;
}

export function creatorsTemplate({ creators, query = "" }: CreatorsTemplateParams) {
  return wrapWithLayout(html`<h1>Creators</h1>
    <p>
      <label for="search">Search</label>
      <input
        type="search"
        name="query"
        id="search"
        value="${query}"
        hx-get="/creators"
        hx-trigger="change, keyup delay:200ms changed"
        hx-target="tbody"
        hx-select="tbody tr"
        hx-push-url="true"
      />
    </p>
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        ${creators.map(
          (creator) =>
            html`<tr>
              <td>${creator.name}</td>
              <td>${creator.description}</td>
              <td>${creator.location}</td>
            </tr>`
        )}
      </tbody>
    </table>
    <p><a href="/login">Back</a></p>`);
}
