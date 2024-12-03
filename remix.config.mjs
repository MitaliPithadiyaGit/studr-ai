export default {
  serverBuildTarget: "vercel",
  serverBuildPath: "build/index.js", // Ensure build path points outside 'public'
  publicPath: "/public/build/",       // Static files location
  appDirectory: "app",
};