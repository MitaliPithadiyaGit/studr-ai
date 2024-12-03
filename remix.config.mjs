/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel", // Important for Vercel deployments
  server: "./server.js", // Make sure the server file path is correct
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  devServerPort: 8002
};
