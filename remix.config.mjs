/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "vercel", // This is required for Vercel deployments
  server: "./server.js", // This should point to your server entry file (ensure it’s a .mjs file)
  appDirectory: "app", // Default app directory for Remix
  assetsBuildDirectory: "public/build", // Where to output assets
  publicPath: "/build/", // Path to static assets
  serverBuildPath: "build/index.js", // Path to the server build (use .mjs for ES modules)
  devServerPort: 8002, // Local development port
};
