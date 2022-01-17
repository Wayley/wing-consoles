module.exports = {
  '/common': {
    target: 'http://121.40.88.181:16088',
    changeOrigin: true,
    pathRewrite: { '^/common': '/common' },
  },
  '/adminota': {
    target: 'http://121.41.109.132',
    changeOrigin: true,
    pathRewrite: { '^/adminota': '/adminota' },
  },
};
