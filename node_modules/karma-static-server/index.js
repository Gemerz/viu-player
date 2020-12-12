/* eslint-disable no-console */
const serveStatic = require('serve-static');
const path = require('path');

const StaticServerMiddlewareFactory = function(config, logger) {
  const log = logger.create('karma-static-server');
  const options = Object.assign({
    root: config.basePath,
    // do not log during singleRun
    log: config.singleRun ? false : true,
    index: ['index.html', 'index.htm']
  }, (config.serveStatic || {}));

  if (options.log) {
    log.info(`serving static files in ./${path.relative(process.cwd(), options.root)}`);
  }

  const serve = serveStatic(options.root, options);

  return function(request, response, next) {

    if (options.log) {
      request.addListener('end', () => {
        log.info(`[${response.statusCode}] ${request.url}`);
      });
    }
    return serve(request, response, next);
  };
};

// inject karma runner config
StaticServerMiddlewareFactory.$inject = ['config', 'logger'];

module.exports = {
  'middleware:staticServer': ['factory', StaticServerMiddlewareFactory]
};
