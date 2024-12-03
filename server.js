import { createRequestHandler } from "@remix-run/vercel";
import * as build from "./build/index";

export default createRequestHandler({ build });