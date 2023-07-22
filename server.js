const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://localhost:44362',
    changeOrigin: true,
    secure: false, // Disable SSL verification
  })
);

const port = 3001; // Port for the proxy server

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});