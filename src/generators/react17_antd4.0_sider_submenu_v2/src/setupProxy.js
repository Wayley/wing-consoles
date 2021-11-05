const { createProxyMiddleware } = require('http-proxy-middleware');
const proxies = require('../config/proxy');

module.exports = function (app) {
  for (const key in proxies) {
    if (Object.hasOwnProperty.call(proxies, key)) {
      app.use(key, createProxyMiddleware(proxies[key]));
    }
  }
};
