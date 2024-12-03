import { createRequestHandler } from '@remix-run/node'; // Remix runtime for handling requests
import * as build from './build/index.js'; // Explicitly import the index.js file from the build folder

export default createRequestHandler({
  build,
  getLoadContext() {
    // Optionally add context for things like session or database
  },
});
