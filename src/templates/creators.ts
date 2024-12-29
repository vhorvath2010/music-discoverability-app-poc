import { html } from "@hono/hono/html";
import { Creator } from "../creator.ts";

export function creatorsTemplate(creators: Creator[]) {
  return html`<h1>Creators</h1>
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
    </table>`;
}
