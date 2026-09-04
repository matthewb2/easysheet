const path = require('path');

module.exports = {
  entry: './electron/main.js', 
  output: {
    path: path.resolve(__dirname, 'build'), // dist -> build로 변경
    filename: 'main.js',
  },
  target: 'electron-main',
  mode: 'production',
};