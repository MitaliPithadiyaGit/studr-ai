export default {
  serverBuildTarget: 'vercel',
  server: './server.js',
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build', // Ensure this is correct
  publicPath: '/build/', // Ensure this is correct
  serverBuildPath: 'public/build/', // Path to the server build
  devServerPort: 8002,
};