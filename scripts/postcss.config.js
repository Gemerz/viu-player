const generate = require('videojs-generate-postcss-config');

module.exports = function(context) {
  const result = generate({}, context);

  return result;
};
