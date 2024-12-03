import { createRequestHandler } from "@remix-run/vercel";
import * as build from "./public/build/root-3D6GBP6H";

export default createRequestHandler({ build });