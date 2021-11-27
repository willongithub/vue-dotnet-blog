// const fs = require('fs')
// const path = require('path')

// const baseFolder =
//     process.env.APPDATA !== undefined && process.env.APPDATA !== ''
//         ? `${process.env.APPDATA}/ASP.NET/https`
//         : `${process.env.HOME}/.aspnet/https`;

// const certificateArg = process.argv.map(arg => arg.match(/--name=(?<value>.+)/i)).filter(Boolean)[0];
// const certificateName = certificateArg ? certificateArg.groups.value : "vue_dotnet_blog";

// if (!certificateName) {
//     console.error('Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly.')
//     process.exit(-1);
// }

// const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
// const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

// module.exports = {
//     devServer: {
//         https: {
//             key: fs.readFileSync(keyFilePath),
//             cert: fs.readFileSync(certFilePath),
//         },
//         proxy: {
//             '^/weatherforecast': {
//                 target: 'https://localhost:5001/'
//             }
//         },
//         port: 5002
//     }
// }


const webpack = require('webpack');
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: false,
  devServer:{
    port: 1234,
    disableHostCheck: true,
    // proxy: {
    //   '/xxx': {
    //     target: 'https://xxx.com/xxx',
    //     ws: true,
    //     changOrigin: true
    //   }
    // }
  },
  // css: {
  //   loaderOptions: {
  //     // css: {
  //     // // options here will be passed to css-loader
  //     // },
  //     postcss: {
  //       // options here will be passed to postcss-loader
  //       plugins: [
  //         require('postcss-px2rem')({
  //           remUnit: 75
  //         })
  //         // require('postcss-px-to-viewport')({
  //         //   viewportWidth: 750,
  //         //   minPixelValue: 1
  //         // })
  //       ]
  //     }
  //   }
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@img',resolve('src/assets/img'))
      .set('@styl',resolve('src/assets/styl'))
      .set('@js',resolve('src/assets/js'))
      .set('@ts',resolve('src/assets/ts'))
      .set('@fonts', resolve('src/assets/fonts'))
      .set('@css', resolve('src/assets/css'))
      .set('@libs',resolve('src/libs'))
      .set('@cp',resolve('src/components'))
      .set('@views',resolve('src/views'))
      .set('@plugins',resolve('src/plugins'))
      .end()
    config.module
      .rule('images')
        .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
        .use('url-loader')
          .loader('url-loader')
          .options({
            limit: 10000,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'static/img/[name].[hash:8].[ext]'
              }
            }
          })
        .end()
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new webpack.BannerPlugin(' The roject developed by chengpeiquan! ')
      ]
    };
  }
}