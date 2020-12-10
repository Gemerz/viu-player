const generate = require("videojs-generate-rollup-config");
const path = require("path");
const presetEnv = require("@babel/preset-env");
const copy = require("rollup-plugin-copy");

// see https://github.com/videojs/videojs-generate-rollup-config
// for options
// copy({
//   targets: [{ src: 'src/fonts/*', dest: 'dist/fonts/*' }]
// })
const options = {
  babel() {
    return {
      babelrc: false,
      exclude: path.join(process.cwd(), "node_modules/**"),
      presets: [
        [
          presetEnv,
          {
            modules: false,
            useBuiltIns: "usage",
            corejs: "3.0.0",
            forceAllTransforms: true,
            debug: false,
          },
        ],
      ],
      plugins: [],
    };
  },
};
const config = generate(options);

// Add additonal builds/customization here!

// export the builds to rollup
export default Object.values(config.builds);
