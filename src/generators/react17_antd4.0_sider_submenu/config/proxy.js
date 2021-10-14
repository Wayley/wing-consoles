/************************************ 开发环境下的代理配置 ************************************/

module.exports = {
  /* *********************** DEVICE SERVICE *********************** */
  /*
   * Fox Example:
   * GetDeviceList: http://121.41.109.132/admindevice/device/deviceInfo/selectPage
   *
   */
  '/admindevice': {
    target: 'http://121.41.109.132',
    changeOrigin: true,
    pathRewrite: { '^/admindevice': '/admindevice' },
  },

  /* *********************** ICS SERVICE *********************** */
  /*
   * Fox Example:
   * Login: http://47.56.210.117:48279/oauth/token
   * Register: http://47.56.210.117:48279/user/register
   *
   */
  '/ics': {
    target: 'http://47.56.210.117:48279',
    changeOrigin: true,
    pathRewrite: { '^/ics': '' },
  },

  /* *********************** FUS SERVICE *********************** */
  /*
   * Fox Example:
   * GetDownloadSignedUrl: http://121.40.88.181:16088/fus/common/getDownloadSignedUrl
   *
   */
  '/fus': {
    target: 'http://121.40.88.181:16088',
    changeOrigin: true,
    pathRewrite: { '^/fus': '' },
  },
};
