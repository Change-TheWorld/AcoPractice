function webpackDevMiddleware(app) {
  let webpack = require('webpack');
  let WebpackDevMiddleware = require('webpack-dev-middleware');
  let config = require('./dev');
  let compiler = webpack(config);
  app.use(WebpackDevMiddleware(compiler, {
    stats: { colors: true }
  }));
}

module.exports = webpackDevMiddleware;
