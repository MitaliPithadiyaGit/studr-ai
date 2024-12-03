import { createRequestHandler } from "@remix-run/vercel";
import * as build from "./build/index"; // Use your server build path

export default createRequestHandler({ build });