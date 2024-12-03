import { createRequestHandler } from "@remix-run/vercel";
import * as build from "./build/index.js";

export default function handleRequest(req, res) {
  return createRequestHandler({ build, req, res });
}
