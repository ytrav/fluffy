const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  pwa: {
    name: 'Fluffy',
    themeColor: '#CDB4DB',
    msTileColor: '#CDB4DB',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'dev/sw.js',
    }
  }
}