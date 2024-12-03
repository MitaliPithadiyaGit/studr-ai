import { createRequestHandler } from "@remix-run/vercel";
import * as build from "./build/index.js";
import 'dotenv/config'; 

export default createRequestHandler({ build });