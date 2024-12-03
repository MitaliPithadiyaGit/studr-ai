import { createRequestHandler } from "@remix-run/vercel";
import * as build from "./public/build/routes/_index-PA3NKEXX";

export default function handleRequest(req, res) {
  return createRequestHandler({ build, req, res });
}
