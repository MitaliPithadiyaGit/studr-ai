import { createRequestHandler } from '@remix-run/node'; // Remix runtime for handling requests
import * as build from './build'; // Ensure this points to the correct build path

export default createRequestHandler({
  build,
  getLoadContext() {
    // Optionally add context for things like session or database
  },
});
