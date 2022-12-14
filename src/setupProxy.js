const { createProxyMiddleware } = require('http-proxy-middleware')

const DEV_SERVER = process.env.REACT_APP_NODE_ENV || 'localhost:27017'

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://${DEV_SERVER}`,
      logLevel: 'debug',
      secure: false,
      pathRewrite: {
        '^/api': '/', // rewrite path
      },
    }),
  )
}
