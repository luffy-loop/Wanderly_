import { destinations } from "./destinations.js";

export async function fetchDestinations() {
  await new Promise((r) => setTimeout(r, 300));
  return destinations;
}