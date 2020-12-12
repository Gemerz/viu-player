const path = require('path');
const progress = require('postcss-progress');

const getSettings = function(options) {
  const pkg = require(path.join(process.cwd(), 'package.json'));

  const settings = {
    banner: options.banner || `@name ${pkg.name} @version ${pkg.version} @license ${pkg.license}`,
    browserslist: options.banner || pkg.browserslist || ['defaults', 'ie 11']
  };

  settings.plugins = [
    // set the startTime so that we can print the end time
    progress.start(),

    // inlines local file imports
    require('postcss-import')(),

    // allow nested rules
    require('postcss-nesting')(),

    // allow custom properties, aka variables
    require('postcss-custom-properties')({preserve: false}),

    // allow calculations to be static values
    // included after vars are inlined
    require('postcss-calc')(),

    // adds a banner to the top of the file
    require('postcss-banner')({important: true, inline: true, banner: settings.banner}),

    // add/remove vendor prefixes based on browser list
    require('autoprefixer')(settings.browserslist),

    // minify
    require('postcss-csso')(),

    progress.stop()
  ];

  if (options.plugins) {
    settings.plugins = options.plugins(settings.plugins);
  }

  return settings;
};

module.exports = function(context, options) {
  const settings = getSettings(options);

  context.opts = {
    to: `dist/${settings.distName}.css`,
    from: settings.input
  };

  return {
    plugins: settings.plugins
  };
};
