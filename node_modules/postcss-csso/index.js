const postcss = require('postcss');
const { compress } = require('csso').syntax;
const postcssToCsso = require('./lib/postcssToCsso.js');
const cssoToPostcss = require('./lib/cssoToPostcss.js');

const postcssCsso = postcss.plugin('postcss-csso', function postcssCsso(options) {
    return function(root, result) {
        result.root = cssoToPostcss(compress(postcssToCsso(root), options).ast);
    };
});

postcssCsso.process = function(css, options) {
    return postcss([postcssCsso(options)]).process(css, { from: undefined });
};

module.exports = postcssCsso;
