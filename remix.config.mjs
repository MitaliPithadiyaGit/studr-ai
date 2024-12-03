/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel", 
  serverBuildPath: "build/index.js", // Ensure this matches your server output
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  devServerPort: 8002
};
