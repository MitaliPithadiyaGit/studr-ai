import { createRequestHandler } from '@remix-run/vercel';
import * as build from '@remix-run/dev/server-build';  // Ensure this path is correct


export default createRequestHandler({ build });