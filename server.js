import { createRequestHandler } from '@remix-run/node'; // For server-side routing in Remix
import * as build from './build'; // Make sure this path points to your build folder

export default createRequestHandler({
  build,
  getLoadContext() {
    // Optionally, you can add context here (e.g., session data, authentication, etc.)
  },
});
