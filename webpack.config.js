/* eslint-disable no-undef */
/* eslint-disable strict */
const path = require(`path`);

module.exports = {
  entry: [
    `./js/stat.js`,
    `./js/game.js`,
    `./js/backend.js`,
    `./js/common.js`,
    `./js/setup.js`,
    `./js/dialog.js`,
    `./js/render.js`,
    `./js/message.js`,
    `./js/form.js`,
    `./js/same-wizards.js`,
    `./js/debounce.js`,
    `./js/main.js`
  ],
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
