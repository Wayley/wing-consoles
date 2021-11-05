module.exports = {
  '/admin': {
    target: 'http://121.41.109.132:20197',
    changeOrigin: true,
    pathRewrite: { '^/admin': '/admin' },
  },
  '/ids': {
    target: 'http://121.40.88.181:48279',
    changeOrigin: true,
    pathRewrite: { '^/ids': '/ids' },
  },
  '/fus': {
    target: 'http://121.40.88.181:16088',
    changeOrigin: true,
    pathRewrite: { '^/fus': '/fus' },
  },
  '/common': {
    target: 'http://121.40.88.181:16088',
    changeOrigin: true,
    pathRewrite: { '^/common': '/common' },
  },
  '/rule': {
    target: 'http://121.41.109.132:20197',
    changeOrigin: true,
    pathRewrite: { '^/rule': '/rule' },
  },
  '/label': {
    target: 'http://121.41.109.132:20197',
    changeOrigin: true,
    pathRewrite: { '^/label': '/label' },
  },
  '/biomatics': {
    target: 'http://121.41.109.132:20197',
    changeOrigin: true,
    pathRewrite: { '^/biomatics': '/biomatics' },
  },
};
