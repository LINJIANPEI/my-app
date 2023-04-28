const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/item': {
        target: 'https://m.you.163.com',
        changeOrigin: true
      }
    }
  }
})
