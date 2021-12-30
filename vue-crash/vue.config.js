module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5050",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
