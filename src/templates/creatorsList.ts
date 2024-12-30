import { html } from "@hono/hono/html";
import { Creator } from "../creator.ts";

export function creatorsListTemplate(creators: Creator[]) {
  return html`<table border="1">
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
