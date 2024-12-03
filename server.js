import { createRequestHandler } from '@remix-run/serve';  // Use @remix-run/serve in production
import * as build from './build';  // Ensure this path is correct for your build folder

export default createRequestHandler({ build });
