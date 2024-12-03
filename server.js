import { createRequestHandler } from '@remix-run/node';
import { build } from './build';  // Your build artifacts should be imported here

export default function handler(req, res) {
  return createRequestHandler({ build })(req, res);
}
