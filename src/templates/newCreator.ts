import { html } from "@hono/hono/html";

export function newCreatorTemplate() {
  return html`<form action="/creators" method="POST">
    <fieldset>
      <legend>New Creator</legend>
      <p>
        <label for="creator-name">Creator Name:</label>
        <input name="creatorName" id="creator-name" type="text" placeholder="Your name here" required />
      </p>
      <p>
        <label for="description">Description:</label>
        <input name="description" id="description" type="text" placeholder="An awesome band!" />
      </p>
      <p>
        <label for="location">Location:</label>
        <input name="location" id="location" type="" placeholder="City, State" required />
      </p>
      <button>Create</button>
      <p><a href="/">Back</a></p>
    </fieldset>
  </form>`;
}
