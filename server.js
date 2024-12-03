import { createRequestHandler } from '@remix-run/vercel';
import * as build from './public/build/routes'; // Ensure this path is correct

export default function handleRequest(req, res) {
  return createRequestHandler({ build, req, res });
}
