const CracoLessPlugin = require('craco-less');
const themeVars = require('./config/theme');
module.exports = {
  webpack: {
    configure: (config, { env, paths }) => {
      return config;
    },
  },
  plugins: [
    // craco-less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeVars,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
