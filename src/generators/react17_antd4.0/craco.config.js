const CracoLessPlugin = require('craco-less');
const path = require('path');
const themeVars = require('./config/theme');
const { appBuildPath } = require('./config/build');

module.exports = {
  webpack: {
    configure: (config, { env, paths }) => {
      paths.appBuild = appBuildPath;
      config.output = {
        ...config.output,
        path: path.resolve(__dirname, 'dist'),
      };
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
