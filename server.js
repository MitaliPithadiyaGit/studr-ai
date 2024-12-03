import { createRequestHandler } from '@remix-run/vercel';
import * as build from './build'; // Ensure this points to your build folder

export default createRequestHandler({ build });
