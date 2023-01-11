const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// module.exports = {
//   chainWebpack: config => {
//     config
//       .plugin('copy')
//       .use(require(
//         'copy-webpack-plugin'
//       ), [[{
//         from: 'src/manifest.json', to: 'dist'
//       }]])
//   }
// }

// module.exports = {
//   pwa: {
//     name: 'Fluffy',
//     themeColor: '#CDB4DB',
//     msTileColor: '#CDB4DB',
//     appleMobileWebAppCapable: 'yes',
//     appleMobileWebAppStatusBarStyle: 'black-translucent',

//     workboxPluginMode: 'InjectManifest',
//     // workboxOptions: {
//     //   swSrc: 'dev/sw.js',
//     // }
//   }
// }