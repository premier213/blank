/* eslint-disable */
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './public/css/antd.less',
  lessVarsFilePathAppendToEndOfContent: true,
  cssLoaderOptions: {
    esModule: false,
    sourceMap: false,
    modules: {
      mode: 'local',
    },
  },
  webpack(config) {
    return config;
  }
});