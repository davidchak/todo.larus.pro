module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
  },
  // configureWebpack: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         'vue-style-loader',
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             // enable CSS Modules
  //             modules: true,
  //             // customize generated class names
  //             localIdentName: '[local]_[hash:base64:8]',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
};
