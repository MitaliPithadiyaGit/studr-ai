import { createRequestHandler } from '@remix-run/vercel';
import * as build from './public/build';  // Ensure the correct path to the build folder

export default function handleRequest(req, res) {
  return createRequestHandler({ build, req, res });
}
