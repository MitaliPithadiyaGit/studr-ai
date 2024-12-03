/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel", // Important for Vercel deployments
  server: "./server.js", // This should point to your custom server entry
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "api/index.js",
  devServerPort: 8002
};