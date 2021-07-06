module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.txt$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}
