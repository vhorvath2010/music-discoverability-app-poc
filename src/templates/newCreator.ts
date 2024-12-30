import { html } from "@hono/hono/html";
import { wrapWithLayout } from "./layout.ts";

export function newCreatorLayout() {
  return wrapWithLayout(html`<form action="/creators" method="POST">
      <fieldset>
        <legend>New Creator</legend>
        <p>
          <label for="name">Name:</label>
          <input id="name" name="name" type="text" required />
        </p>
        <p>
          <label for="description">Description:</label>
          <input id="description" name="description" ="text" />
        </p>
        <p>
          <label for="location">Location:</label>
          <input id="location" name="location" type="text" required />
        </p>
        <button>Create</button>
      </fieldset>
    </form>
    <p><a href="/login">Back</a></p>
    <script
      async
      src="https://maps.googleapis.com/maps/api/js?key=${Deno.env.get(
        "MAPS_API_KEY"
      )}&loading=async&libraries=places&callback=initAutocomplete"
    ></script>
    <script>
      function initAutocomplete() {
        const input = document.getElementById("location");
        const options = {
          types: ["locality", "sublocality", "neighborhood"],
        };
        const autocomplete = new google.maps.places.Autocomplete(input, options);
      }
    </script>`);
}
