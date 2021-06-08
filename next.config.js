const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
// const sourceMaps = {
//   productionBrowserSourceMaps: true
// }
const antdLess = require('next-plugin-antd-less')({
  lessVarsFilePath: './public/css/global.less',
  lessVarsFilePathAppendToEndOfContent: true,
  cssLoaderOptions: {},
  webpack(config) {
    return config
  },
  future: {
    webpack5: true
  }
})

module.exports = withPlugins([[antdLess], [withBundleAnalyzer]])
